---
title: "Starter Pack Scanner"
description: "Check documentation repositories and published sites for configuration, discoverability, and migration issues against preset expectations."
weight: 50
collection: "tools"
category: "Documentation quality"
role: "Personal project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of a documentation repository and a published site being checked together."
cover_source: "progress-bar.png"
cover_fit: "contain"
cover_accent: "#64D2DB"
cover_label: "Scan in progress"
cover_note: "Repository and site checks · migration validation · batch reports"
cover_alt: "Starter Pack Scanner's retro scan-progress dialog in dark mode with a green progress bar, framed with cyan project artwork."
cover_caption: "The batch-scan progress dialog in dark mode, supplied by the source repository, with decorative framing. This is a saved example, not a new scan."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/starter-pack-scanner"
examples:
  - kind: "Check catalogue"
    title: "Inspect what the scanner checks"
    description: "Review the repository and live-site checks, including validation for documentation URL migrations."
    action: "Read the available checks"
    url: "https://github.com/izmalk/starter-pack-scanner#available-checks"
  - kind: "Batch workflow"
    title: "Review several repositories together"
    description: "See the YAML input for running a repeatable set of checks across multiple documentation projects."
    action: "Read the batch-scan workflow"
    url: "https://github.com/izmalk/starter-pack-scanner#batch-scanning"
gallery:
  - image: "source-preview.png"
    alt: "Starter Pack Scanner's local web interface in dark mode, with repository URL and optional published documentation URL fields."
    caption: "The local web interface in dark mode. Screenshot supplied by the project's source repository."
  - image: "batch-scan.png"
    alt: "Starter Pack Scanner's batch-scan interface in dark mode, showing YAML input for checking several documentation repositories."
    caption: "The batch-scan input interface in dark mode. Screenshot supplied by the project's source repository."
  - image: "batch-results.png"
    alt: "Stored batch-scan results in dark mode, showing per-repository check totals and findings."
    caption: "Example batch-scan results from the source repository, in dark mode. The displayed findings are a saved example, not a new scan."
---

## Project summary

A documentation site depends on more than its pages. Build configuration, publishing URLs, metadata, and discovery files all affect whether readers can find and use the material. Reviewing those details manually across multiple products can become repetitive, tedious and prone to errors.

Starter Pack Scanner runs a modular set of checks against repositories using Canonical's [Sphinx Stack](https://github.com/canonical/sphinx-stack), previously known as the Starter Pack. It provides a command-line interface, a local web interface and a Python API.

## My involvement

This is one of my personal documentation automation projects. Its scope is the supporting infrastructure around documentation: repository configuration, publication URLs and discovery resources. The interfaces expose the same underlying checks for individual investigations and wider reviews.

My main goal was to save effort and raise reliability of quality control.

## Main challenges

The checks themselves are designed to be easily extendable, like plugins.

It can be hard to infer the published documentation address from its repository. For that reason, it has some heuristics and a manual override.

Repository configuration and the published site can diverge. The scanner clones a target repository into a temporary directory, identifies the documentation root and runs the selected checks. Live-site checks inspect published pages and discovery resources, including metadata and the links exposed through `llms.txt`.

A dedicated migration group checks documentation moving from Read the Docs hosting domain to Canonical's own domains. It covers configuration and live behaviour such as canonical URLs, sitemaps, redirects and HTTP responses for missing pages. Both sources contribute to the same report.

The local web interface presents findings and guidance, while batch YAML input records the options for several repositories in one place. Reports are cached on disk with their generation time, and a fresh scan can bypass the cache. A common check interface and CLI exit codes let the same workflow support interactive and automated reviews.
