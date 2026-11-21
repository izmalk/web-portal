// Native dialog supplies modal focus and Escape handling. Ordinary image links
// remain the fallback when this enhancement or dialog support is unavailable.
(() => {
  const dialog = document.querySelector<HTMLDialogElement>("#image-viewer");
  const main = document.querySelector<HTMLElement>("main.content");
  if (!dialog || !main || typeof dialog.showModal !== "function") return;

  const image = dialog.querySelector<HTMLImageElement>(".image-viewer-image");
  const caption = dialog.querySelector<HTMLElement>(".image-viewer-caption");
  const status = dialog.querySelector<HTMLElement>(".image-viewer-status");
  const error = dialog.querySelector<HTMLElement>(".image-viewer-error");
  const original = dialog.querySelector<HTMLAnchorElement>(".image-viewer-original");
  const close = dialog.querySelector<HTMLButtonElement>(".image-viewer-close");
  const zoom = dialog.querySelector<HTMLButtonElement>(".image-viewer-zoom");
  const stage = dialog.querySelector<HTMLElement>(".image-viewer-stage");
  if (!image || !caption || !status || !error || !original || !close || !zoom || !stage) return;

  const excluded = "[data-no-image-viewer], .project-card, .media-thumbnail, button, .image-viewer";
  const imageFile = /\.(?:avif|bmp|gif|jpe?g|png|svg|tiff?|webp)$/i;
  let opener: HTMLAnchorElement | null = null;
  let unlock: (() => void) | null = null;
  let request = 0;

  function isBlockImage(img: HTMLImageElement): boolean {
    if (img.closest("figure")) return true;
    const imageUnit = img.parentElement?.tagName === "PICTURE" ? img.parentElement : img;
    const unit = imageUnit.closest("a") || imageUnit;
    const parent = unit.parentElement;
    if (!parent) return false;
    const display = getComputedStyle(parent).display;
    if (display === "inline" || display === "inline-flex") return false;
    // Text beside an image indicates an inline illustration or icon.
    if (Array.from(parent.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim())) return false;
    if (parent.tagName === "P") {
      return Array.from(parent.childNodes).every(node => node === unit || !node.textContent?.trim());
    }
    return ["block", "grid", "flex"].includes(getComputedStyle(img).display);
  }

  function enhance(img: HTMLImageElement): void {
    if (img.closest(excluded)) return;
    let link = img.closest<HTMLAnchorElement>("a");
    if (link) {
      let path: string;
      try { path = new URL(link.href, document.baseURI).pathname; }
      catch { return; }
      if (!link.hasAttribute("data-image-viewer") && (!imageFile.test(path) || !isBlockImage(img))) return;
    } else {
      if (!isBlockImage(img)) return;
      const unit = img.parentElement?.tagName === "PICTURE" ? img.parentElement : img;
      link = document.createElement("a");
      link.href = img.currentSrc || img.src;
      unit.before(link);
      link.append(unit);
    }
    link.classList.add("image-zoom");
    link.setAttribute("data-image-viewer", "");
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute("aria-controls", dialog.id);
    link.setAttribute("aria-label", `Enlarge image${img.alt ? `: ${img.alt}` : ""}`);
    link.removeAttribute("target");
  }

  main.querySelectorAll<HTMLImageElement>("img").forEach(enhance);

  function lockScroll(): () => void {
    const nodes = [document.documentElement, document.body, main!];
    const positions = nodes.map(node => ({ node, x: node.scrollLeft, y: node.scrollTop }));
    const saved = nodes.map(node => ({
      node,
      value: node.style.getPropertyValue("overflow"),
      priority: node.style.getPropertyPriority("overflow"),
    }));
    const x = window.scrollX;
    const y = window.scrollY;
    nodes.forEach(node => node.style.setProperty("overflow", "hidden", "important"));
    return () => {
      saved.forEach(({ node, value, priority }) => {
        if (value) node.style.setProperty("overflow", value, priority);
        else node.style.removeProperty("overflow");
      });
      positions.forEach(({ node, x, y }) => node.scrollTo({ left: x, top: y, behavior: "instant" as ScrollBehavior }));
      window.scrollTo({ left: x, top: y, behavior: "instant" as ScrollBehavior });
    };
  }

  function resetZoom(): void {
    dialog!.classList.remove("image-viewer-actual");
    zoom!.setAttribute("aria-pressed", "false");
    zoom!.textContent = "Actual size";
    stage!.scrollTop = 0;
    stage!.scrollLeft = 0;
  }

  main.addEventListener("click", event => {
    if (!(event.target instanceof Element) || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest<HTMLAnchorElement>("a[data-image-viewer]");
    const source = link?.querySelector<HTMLImageElement>("img");
    if (!link || !source || link.closest(excluded) || !main.contains(link) || dialog.open) return;
    let url: URL;
    try { url = new URL(link.href, document.baseURI); }
    catch { return; }
    if (!["http:", "https:", "blob:", "data:"].includes(url.protocol)) return;
    if (url.protocol === "data:" && !url.href.startsWith("data:image/")) return;

    // The figure caption explains the image; alt text remains on the image.
    const text = link.dataset.imageCaption
      || source.closest("figure")?.querySelector("figcaption")?.textContent?.trim()
      || source.title
      || source.alt;
    caption.textContent = text;
    caption.hidden = !text;
    if (text) dialog.setAttribute("aria-describedby", caption.id);
    else dialog.removeAttribute("aria-describedby");
    image.alt = source.alt;
    image.hidden = true;
    error.hidden = true;
    status.hidden = false;
    status.textContent = "Loading image…";
    zoom.disabled = true;
    original.href = url.href;
    resetZoom();
    const currentRequest = ++request;
    image.onload = () => {
      if (request !== currentRequest || !dialog.open) return;
      image.hidden = false;
      status.hidden = true;
      zoom.disabled = false;
    };
    image.onerror = () => {
      if (request !== currentRequest || !dialog.open) return;
      image.hidden = true;
      status.hidden = true;
      error.hidden = false;
    };
    opener = link;
    unlock = lockScroll();
    try {
      dialog.showModal();
    } catch {
      unlock();
      unlock = null;
      opener = null;
      return; // Preserve the normal image link if a modal cannot open.
    }
    event.preventDefault();
    image.src = url.href;
  });

  zoom.addEventListener("click", () => {
    const actual = dialog.classList.toggle("image-viewer-actual");
    zoom.setAttribute("aria-pressed", String(actual));
    zoom.textContent = actual ? "Fit to window" : "Actual size";
    stage.scrollTop = 0;
    stage.scrollLeft = 0;
  });
  close.addEventListener("click", () => dialog.close());

  // Only a press and release on the backdrop dismisses the viewer. Dragging
  // outside while inspecting a large image must not close it accidentally.
  let backdropPress = false;
  dialog.addEventListener("pointerdown", event => { backdropPress = event.target === dialog; });
  dialog.addEventListener("click", event => {
    if (event.target === dialog && backdropPress) dialog.close();
    backdropPress = false;
  });
  dialog.addEventListener("close", () => {
    ++request;
    image.onload = null;
    image.onerror = null;
    image.removeAttribute("src");
    unlock?.();
    unlock = null;
    const trigger = opener;
    opener = null;
    trigger?.focus({ preventScroll: true });
  });
})();
