---
title: "Ulwazi"
description: "A Sphinx theme built on the Vanilla Framework, bringing a consistent reading experience to technical documentation."
weight: 10
collection: "tools"
featured: true
category: "Documentation design"
role: "Main maintainer and author"
image: "cover.svg"
image_alt: "Conceptual illustration of Ulwazi's documentation layout, combining navigation, an article, and content panels."
image_caption: "A conceptual illustration of the theme. See the live documentation below."
cover_source: "site.webp"
cover_accent: "#67D7A5"
cover_label: ""
cover_note: "Theme development · reusable layouts · live preview"
cover_alt: "The real Ulwazi documentation preview in light mode, framed with emerald project artwork."
cover_caption: "The published Ulwazi theme preview in light mode, captured in November 2026, with decorative framing."
links:
  - label: "Live docs"
    url: "https://documentation.ubuntu.com/ulwazi/"
  - label: "Source code"
    url: "https://github.com/canonical/ulwazi"
examples:
  - kind: "Configuration"
    title: "Configure the theme"
    description: "Inspect the options for adapting Ulwazi's layout, navigation and Canonical branding to a documentation site."
    action: "Read the configuration reference"
    url: "https://documentation.ubuntu.com/ulwazi/content/configuration/"
  - kind: "Working demo"
    title: "Explore rendered components"
    description: "See headings, code blocks, tables and other MyST content rendered by the theme itself."
    action: "Browse the MyST examples"
    url: "https://documentation.ubuntu.com/ulwazi/content/myst-cheat-sheet/"
gallery:
  - image: "site.webp"
    alt: "The published Ulwazi theme preview in light mode, with site navigation, a documentation article and an on-page contents list."
    caption: "The live Ulwazi documentation and theme preview in light mode, captured in November 2026."
  - image: "configuration.webp"
    alt: "Ulwazi's configuration reference in light mode, showing settings and code examples for configuring the theme."
    caption: "The theme configuration reference in light mode, captured in November 2026."
  - image: "myst.webp"
    alt: "Ulwazi's MyST cheat sheet in light mode, showing technical content rendered by the theme."
    caption: "The MyST component examples rendered by Ulwazi in light mode, captured in November 2026."
---

## Project summary

Ulwazi brings the Vanilla Framework's visual language to Sphinx documentation. Built on sphinx-basic-ng, it connects an established documentation generator with the design framework used across Canonical's web presence.

The theme combines templates, styles and navigation behaviour in a reusable package. It supports a generic Vanilla appearance and configuration for Canonical's documentation sites.

## My involvement

I'm the project's main maintainer and author. As part of my documentation engineering work at Canonical, I bring together the reading interface and the authoring workflow: page structure, navigation, reusable templates, configuration and local preview.

## Main challenges

A documentation theme has to connect Sphinx's content model with the Vanilla Framework while helping readers move between topics and find their place within a page. The layout needs to remain usable across different kinds of technical content and different screen sizes.

The sample documentation serves as both a guide and a working demonstration. Its pages exercise the theme's components, while the local preview workflow lets changes to content, templates and styles be reviewed together. Configuration keeps generic Vanilla styling and Canonical-specific needs within the same theme.
