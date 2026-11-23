/* Track the section at the reading position, including pages whose main
 * content scrolls independently of the browser window.
 */
(() => {
    function initializeToc() {
        const toc = document.getElementById("TableOfContents");
        const sections = document.querySelector("main.content .posts, main.content .post, main.content .project-detail");
        if (!toc || !sections) return;

        function headingId(hash) {
            try {
                return decodeURIComponent(hash.slice(1));
            } catch {
                return null;
            }
        }

        // Track linked sections: headings in articles and projects, or home-page previews.
        const entries = Array.from(toc.querySelectorAll("a[href]"), link => {
            const heading = document.getElementById(headingId(link.hash));
            const item = link.closest("li");
            return heading && sections.contains(heading) && item
                ? { link, heading, item } : null;
        }).filter(Boolean);
        if (!entries.length) return;

        const entriesById = new Map(entries.map(entry => [entry.heading.id, entry]));
        const content = sections.closest("main.content");
        const project = sections.matches(".project-detail");
        const label = document.getElementById("contents");
        if (label) label.textContent = "Contents";

        let activeEntry = null;
        let navigation = null;
        let framePending = false;

        function readingPosition() {
            const contentScrolls = content.scrollHeight > content.clientHeight + 1
                && /auto|scroll/.test(getComputedStyle(content).overflowY);
            const scroller = contentScrolls ? content
                : document.scrollingElement || document.documentElement;
            const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
            return {
                top: contentScrolls ? Math.max(0, content.getBoundingClientRect().top) : 0,
                scrollTop: Math.max(0, Math.min(scroller.scrollTop, maxScroll)),
                maxScroll,
            };
        }

        function setActive(entry) {
            if (activeEntry === entry) return;
            entries.forEach(candidate => {
                const active = candidate === entry;
                candidate.item.classList.toggle("active", active);
                candidate.item.classList.toggle("inactive", !active);
                if (active) candidate.link.setAttribute("aria-current", "location");
                else candidate.link.removeAttribute("aria-current");
            });
            activeEntry = entry;
        }

        function update() {
            framePending = false;
            const position = readingPosition();

            // Keep an explicit anchor selection until the reading position moves.
            // This also handles short sections whose anchors cannot reach the top.
            if (navigation && Math.abs(position.scrollTop - navigation.scrollTop) <= 1) {
                setActive(navigation.entry);
                return;
            }
            navigation = null;

            const readingLine = position.top + 24;
            let current = entries[0];
            for (const entry of entries) {
                // Project anchors stop at their CSS scroll margin. Use that inset
                // after smooth navigation settles, allowing for pixel rounding.
                const margin = project ? parseFloat(getComputedStyle(entry.heading).scrollMarginTop) || 0 : 0;
                const line = project ? position.top + Math.max(24, margin + 1) : readingLine;
                if (entry.heading.getBoundingClientRect().top > line) break;
                current = entry;
            }
            if (position.maxScroll > 0 && position.maxScroll - position.scrollTop <= 1) {
                current = entries[entries.length - 1];
            }
            setActive(current);
        }

        function scheduleUpdate() {
            if (framePending) return;
            framePending = true;
            requestAnimationFrame(update);
        }

        function selectAnchor() {
            const entry = entriesById.get(headingId(window.location.hash));
            navigation = entry ? { entry, scrollTop: readingPosition().scrollTop } : null;
            if (entry) setActive(entry);
            else scheduleUpdate();
        }

        content.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("hashchange", selectAnchor);
        window.addEventListener("resize", () => {
            navigation = null;
            scheduleUpdate();
        });
        window.addEventListener("load", scheduleUpdate, { once: true });
        window.addEventListener("pageshow", scheduleUpdate);

        toc.addEventListener("click", event => {
            if (event.defaultPrevented || event.button !== 0
                || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const link = event.target.closest("a[href]");
            if (!link || !entriesById.has(headingId(link.hash))) return;

            // Native anchor navigation updates scrolling and history. Read its final
            // position on the next frame, including clicks on the existing fragment.
            requestAnimationFrame(() => {
                if (!event.defaultPrevented && headingId(window.location.hash) === headingId(link.hash)) {
                    selectAnchor();
                }
            });
        });

        if ("ResizeObserver" in window) {
            new ResizeObserver(scheduleUpdate).observe(sections);
        }
        if (document.fonts) document.fonts.ready.then(scheduleUpdate);

        selectAnchor();
        scheduleUpdate();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeToc, { once: true });
    } else {
        initializeToc();
    }
})();
