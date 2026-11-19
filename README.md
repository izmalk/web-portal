# Web-portal

Personal web portal. Built with [Hugo](https://gohugo.io) using the [Poison](https://github.com/lukeorth/poison) theme.

To build and serve via local web-server:

```shell
hugo serve
```

To build HTML for publishing:

```shell
hugo
```

To publish: just upload the contents of the `public` folder to your web server.

## Theme

The Poison theme lives in `themes/poison` (cloned from <https://github.com/lukeorth/poison>).
To pull future theme updates:

```shell
cd themes/poison
git pull
```

## Content layout

- `content/posts/` — blog posts (shown on the front page and in the Posts menu).
- `content/about/`, `content/summary/`, `content/education/`, `content/experience/`, `content/mentorship/` — single pages (`_index.md` with `layout: single`), linked from the sidebar menu.
