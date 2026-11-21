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
- `content/portfolio/` — the Portfolio page at `/portfolio/`, currently showing a work-in-progress notice. Uses `layout: profile` with the TOC hidden.
- Work profile combines Summary, Education and Work experience. Their old URLs (`/summary/`, `/education/`, `/work-experience/`) redirect to `/work-profile/` through Hugo aliases.

To add a Public profile appearance, copy a `media-entry` shortcode in
`content/public-profile/_index.md` into the relevant section. Its parameters are
`title`, `source`, `format` and `url`; `language` and `video` are optional. The
shortcode body is Markdown, including descriptions and additional links. For a
YouTube thumbnail, set `video` to the video ID and save its image as
`static/images/public-profile/<video-id>.jpg`. Existing thumbnails are the videos'
public YouTube previews, stored locally so the page needs no embedded player.
