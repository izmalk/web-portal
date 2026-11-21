# Web-portal

Personal web portal. Built with [Hugo](https://gohugo.io) using the [Poison](https://github.com/lukeorth/poison) theme.

Agent guidance is in [AGENTS.md](AGENTS.md). Portfolio structure and editorial
conventions are in [PORTFOLIO.md](PORTFOLIO.md).

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

Site credits stay at the bottom of the desktop sidebar, outside its scrolling
navigation. On mobile they appear in a fixed bottom bar, with page space reserved
so the last content and links remain reachable. The shared markup lives in
`layouts/partials/sidebar/footer.html`; the theme's credit text stays unchanged.

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
to the next project in its category. The catalogue has two sections with jump
links and automatic counts: **Documentation and texts** and **Tools and
automation**. Their labels and descriptions live in `data/portfolio.yaml`.
Kafka, OpenSearch, TypeDB, VK Private Cloud, and Tarantool Data Grid belong to
the first section, followed by the BusyRebar blog post. Ulwazi and the other
tools belong to the second section.

Project pages keep the header, hero, description, and Gallery in the reading
column. On wide screens, the local contents list stays beside that column and
highlights the current section while scrolling or following an anchor. Gallery
is included in the contents list. On smaller screens, the list sits between the
project header and hero.

To add a project:

```shell
hugo new content portfolio/my-project/index.md --kind portfolio
```

Edit the new `content/portfolio/my-project/index.md`. Set `title`, `description`,
`collection`, `category`, `role`, and `links`. Set `collection: documentation`
for documentation and texts or `collection: tools` for tools and automation;
an omitted or other value defaults to tools. `category` remains the short
descriptive label on each card. Use `weight` to control the position within a
collection (lower numbers appear first). Keep `draft: true` until it is ready;
`hugo server -D` includes drafts in the local preview. Set `draft: false` to include the project
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

For cards linking to specific work samples, add an `examples` list to the page's
front matter, with `kind`, `title`, `description`, `action` and `url` for each
entry. The project template automatically renders an **Examples** section before
Gallery and includes it in the local contents list. The cards use the site's
palette and stack when there is room for only one column.

To make a screenshot-based cover, set `cover_source` to a local PNG, JPEG, or
WebP in the project's folder. Hugo places the unaltered screenshot inside the
shared SVG frame at build time. Set `cover_label`, `cover_alt`, `cover_caption`,
and optionally `cover_note`, `cover_accent`, and `cover_badge` to describe and
style it. Set `cover_label: ""` to omit the label above the screenshot; omitting
the field uses “Project screenshot”. The badge defaults to “Open source”; documentation entries use
“Documentation”. Use `cover_fit: contain` to show the entire screenshot when cropping would hide an
important detail, such as a progress bar. The
original `image` remains the fallback when `cover_source` is omitted or missing;
the original `cover.svg` illustrations are preserved. Captures are embedded
in the generated SVG, so covers are self-contained and make no remote requests.
Generated cover paths include a digest of the render data so changes to a
screenshot, label, or framing option also update a running Hugo preview.

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

- Ulwazi `site.webp`: the linked published documentation, captured in November 2026.
- Kafka `site.webp`: the [live version 4 documentation home page](https://canonical.com/data/kafka/docs/4/), captured in light mode on 21 November 2026. The same capture supplies the framed cover and the first gallery image.
- Kafka `tutorial.webp`, `deploy-juju.webp`, `actions.webp` and `components.webp`: the live [tutorial](https://canonical.com/data/kafka/docs/4/tutorial/), [Juju CLI deployment guide](https://canonical.com/data/kafka/docs/4/how-to/deploy/deploy-anywhere/), [generated actions reference](https://canonical.com/data/kafka/docs/4/reference/_generated/actions/) and [component overview](https://canonical.com/data/kafka/docs/4/explanation/components/), respectively. All were captured in light mode on 21 November 2026, at the same 1440 × 1060 viewport and twice the pixel density.
- Kafka `navigation.webp`: the live version 4 documentation menu, captured in light mode on 21 November 2026 with every branch expanded. The native menu captures are arranged in four section columns inside a light frame, with Home and Contributor's guide above them; all 57 navigation links and their nesting are preserved.
- OpenSearch `site.webp`: the linked version 2 documentation, captured in November 2026.
- TypeDB `site.webp`: the supplied Wayback Machine snapshot of the documentation overview, dated 15 June 2024. The card and detail page link to that archive.
- VK Private Cloud `screenshot.webp` and `project-quotas.webp`: the supplied administrator guide (12 August 2022), p.161; the former is a full-page render of the quota-management procedure, the latter an excerpt showing the administrator portal's resource quotas. `test-methodology.webp`: the supplied test programme and methodology (25 August 2022), p.44.
- Tarantool Data Grid `screenshot.webp` and `interface.webp`: the supplied release 1.0 documentation (2 November 2020), printed p.43 / PDF page 45; the former is a full-page render, the latter an interface excerpt. `domain-model.webp`: printed p.3 / PDF page 5 of the same document.
- STAT `source-preview.webp`: [the annotated tutorial example](https://github.com/izmalk/stat/blob/main/examples/sample-page.md?plain=1), captured from GitHub on 21 November 2026.
- Release Notes Builder `generated-notes.webp`: [the generated Charmed Apache Kafka example](https://github.com/izmalk/release-notes-builder/blob/main/release-notes/charmed-apache-kafka-rev777.md), captured from GitHub in November 2026. Revision 777 is a placeholder used by the example, not a real release revision.
- Scanner `progress-bar.png` (cover) and `source-preview.png` (gallery): `starter_pack_scanner/pics/progress-bar.png` and `starter_pack_scanner/pics/main-screen.png` in its source repository.
- Auditor `source-preview.png`: `hero-image.png` in its source repository.
- BusyRebar reuses `/images/busy-led.jpg` and `/images/busy-power.jpg` from the existing build post; no additional image copies are needed.

The STAT capture shows annotated tutorial source; the release-note capture shows
a generated example stored in the repository. Prototype
descriptions can be expanded with personal project decisions and outcomes before
publication.

The supplied Private Cloud and TDG PDFs are source material only: their original
files are not stored in the site. Selected pages and excerpts were rendered
directly to WebP images. Their entries distinguish the historical samples from
the substantially newer live documentation linked for context.

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
