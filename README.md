# Web-portal

Personal web portal. Built with [Hugo](https://gohugo.io) using the [Poison](https://github.com/lukeorth/poison) theme.

To build and serve via local web-server:

```shell
hugo server
```

To build HTML for publishing:

```shell
hugo build
```

To publish: just upload the contents of the `public` folder to your web server.

## Theme

The selected design uses emerald accents, slate greys, grey dividers, and a green
portrait ring. Light mode uses a near-white page with the same dark slate sidebar.
The sun/moon button switches modes and remembers your choice; new visitors start
in dark mode, as configured by `params.dark_mode`.

Palette values live in `config.toml`. Editorial rules, dividers and the portrait
ring are styled in `assets/css/custom.css`. The site-level
`layouts/partials/sidebar/menu.html` override marks the current page for its green
navigation highlight. Hugo includes these customizations in the normal build;
the `design-preview` files are only the earlier comparison galleries.

`assets/js/toc.js` overrides the theme's TOC tracking. It follows the section at
the top of the reading area, supports both the desktop content pane and window
scrolling, and preserves explicit anchor selections until scrolling resumes.
The home page uses the same tracker for its post previews: “Posts on this page”
links jump to previews on the current pagination page, while post titles and
“Read More” open the full posts. Its template override is `layouts/index.html`.

The Mentorship page includes an emerald ADPList impact card. On wide, tall
screens it sits beneath the contents in the right column; on smaller screens it
appears after the introductory booking link. Both positions use the same
`layouts/partials/mentorship/impact.html` partial and CSS visibility rules.
The figures are a fixed snapshot: update `data/mentorship.yaml`, including
`as_of`, when refreshing the totals. Bookings and reviews are separate counts;
the review count links to ADPList's public reviews widget.

The Poison theme lives in `themes/poison` (cloned from <https://github.com/lukeorth/poison>).
To pull future theme updates:

```shell
cd themes/poison
git pull
```

## Content layout

- `content/posts/` — blog posts, shown on the front page and linked from the Blog menu at `/posts/`. The sidebar keeps this as a single link using Poison's `HasChildren = false` setting.
- `content/about/`, `content/work-profile/`, `content/mentorship/` — standalone pages linked as About me, Work profile and Mentorship in the sidebar. Work profile uses `layout: profile` for a title-only header.
- `content/public-profile/` — the YouTube channel, talks, podcasts, workshops, courses and interviews at `/public-profile/`. Uses `layout: profile` and the section TOC.
- `content/portfolio/` — the project catalogue at `/portfolio/`. Each project is a Markdown page bundle with its own detail page and local images.
- Work profile combines Summary, Education and Work experience. Their old URLs (`/summary/`, `/education/`, `/work-experience/`) redirect to `/work-profile/` through Hugo aliases.

To add a Public profile appearance, copy a `media-entry` shortcode in
`content/public-profile/_index.md` into the relevant section. Its parameters are
`title`, `source`, `format` and `url`; `language` and `video` are optional. The
shortcode body is Markdown, including descriptions and additional links. For a
YouTube thumbnail, set `video` to the video ID and save its image as
`static/images/public-profile/<video-id>.jpg`. Existing thumbnails are the videos'
public YouTube previews, stored locally so the page needs no embedded player.

## Portfolio

The portfolio uses `layouts/portfolio/` and `layouts/partials/portfolio/`, with
scoped styles in `assets/css/custom.css`. It inherits the site's slate and
emerald palette, supports light and dark mode, and switches from a two-column
catalogue to a single column when space is limited. Each project has a cover,
summary, resource links, full description, optional image gallery, and navigation
to the next project. The catalogue and count update automatically.

To add a project:

```shell
hugo new content portfolio/my-project/index.md --kind portfolio
```

Edit the new `content/portfolio/my-project/index.md`. Set `title`, `description`,
`category`, `role`, and `links`, and use `weight` to control its position (lower
numbers appear first). Keep `draft: true` until it is ready; `hugo server -D`
includes drafts in the local preview. Set `draft: false` to include the project
in a normal build.

Save images in the same folder as `index.md`, then set `image` and `image_alt`.
An omitted image uses a built-in cover. A `gallery` accepts any number of images;
each entry has `image`, `alt`, and an optional `caption`. Hero and gallery images
open in the site's image viewer. For example:

```yaml
image: cover.webp
image_alt: "The project's documentation home page."
gallery:
  - image: editor.webp
    alt: "The editor displaying a documentation review."
    caption: "Reviewing a guide in the editor."
```

To make a screenshot-based cover, set `cover_source` to a local PNG, JPEG, or
WebP in the project's folder. Hugo places the unaltered screenshot inside the
shared SVG frame at build time. Set `cover_label`, `cover_alt`, `cover_caption`,
and optionally `cover_note` and `cover_accent` to describe and style it. The
original `image` remains the fallback when `cover_source` is omitted or missing;
all six original `cover.svg` illustrations are preserved. Captures are embedded
in the generated SVG, so covers are self-contained and make no remote requests.

```yaml
image: cover.svg
image_alt: "A conceptual illustration of the project."
cover_source: screenshot.webp
cover_label: "Project interface"
cover_alt: "The actual project interface, with decorative framing."
cover_caption: "The local interface, captured in November 2026."
cover_accent: "#67D7A5"
```

The initial entries use descriptions grounded in their public repositories and
documentation. Their cover captures are genuine; the surrounding graphics and
the separate workflow diagrams are illustrative. Image sources:

- Ulwazi and Kafka `site.webp`: the linked published documentation, captured in November 2026.
- STAT `source-preview.webp`: [the annotated tutorial example](https://github.com/izmalk/stat/blob/main/examples/sample-page.md?plain=1), captured from GitHub on 21 November 2026.
- Release Notes Builder `source-preview.webp`: [the committed Revision 248 example](https://github.com/izmalk/release-notes-builder/blob/main/examples/205-248.md), captured from GitHub on 21 November 2026.
- Scanner `source-preview.png`: `starter_pack_scanner/pics/main-screen.png` in its source repository.
- Auditor `source-preview.png`: `hero-image.png` in its source repository.

The STAT and release-note captures show repository examples, rather than a new
execution or a claim of newly published output. Prototype descriptions can be
expanded with personal project decisions and outcomes before publication.

Tags and filtering remain future additions. Each page already supplies a title
and description to the theme's existing canonical, sitemap, and social metadata;
the prototype adds no SEO service or dependency.

## Image viewer

Block images throughout the site use a shared native `<dialog>` viewer. It
supports keyboard focus, Escape, a close control, backdrop dismissal, and a
fit/actual-size view for screenshots. The reader stays on the same page, and
closing restores focus and the reading position. Inline images, sidebar
portraits, catalogue navigation, and video links retain their existing purpose.

Standalone Markdown images are rendered as linked figures automatically. The
About me portrait and portfolio images also have normal image links as a
fallback: with scripting disabled, they open the image in the same tab. Other
unlinked HTML block images are enhanced when the page loads. An explicit
`data-image-viewer` attribute opts an image link into the viewer;
`data-no-image-viewer` on an image or its container opts out.

The implementation lives in `assets/ts/image-viewer.ts`,
`assets/css/image-viewer.css`, and `layouts/partials/image-viewer.html`. Hugo's
built-in `js.Build` compiles the TypeScript during a normal site build; no Node
setup or external lightbox library is required. The Markdown image render hook
is `layouts/_default/_markup/render-image.html` and uses Goldmark's standalone
image setting in `config.toml`. The adjacent `render-link.html` override preserves
author-supplied links around images without producing nested anchors.
