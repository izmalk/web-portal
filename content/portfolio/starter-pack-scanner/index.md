---
title: "Starter Pack Scanner"
description: "Check documentation repositories and published sites for configuration, discoverability, and migration issues."
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
cover_note: "Repository checks · published sites · migration validation"
cover_alt: "Starter Pack Scanner's retro scan-progress dialog with a green progress bar, framed with cyan project artwork."
cover_caption: "The batch-scan progress dialog, from the project's source repository, with decorative framing."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/starter-pack-scanner"
gallery:
  - image: "source-preview.png"
    alt: "Starter Pack Scanner's actual local web interface, with repository URL and optional published documentation URL fields."
    caption: "The local web interface. Screenshot from the project's source repository."
  - image: "progress-bar.png"
    alt: "Starter Pack Scanner's batch-scan dialog, with a green progress bar and the current check displayed below."
    caption: "The batch-scan progress dialog. Screenshot from the project's source repository."
  - image: "detail.svg"
    alt: "Conceptual diagram showing repository checks and live-site checks contributing to one scan report."
    caption: "Conceptual overview of the documentation scanning workflow."
---

## Make documentation checks repeatable

A documentation site depends on more than its pages. Build configuration, publishing URLs, metadata, and discovery files all affect whether readers can find and use the material. Reviewing those details across several repositories can become repetitive.

Starter Pack Scanner runs a modular set of checks against repositories using Canonical's Sphinx Stack, previously known as the Starter Pack. It provides a command-line interface, a local web interface, and a Python API. The [project README](https://github.com/izmalk/starter-pack-scanner#readme) describes the available checks and the configuration for each interface.

## Look at the source and the published site

The scanner clones a target repository into a temporary directory, identifies the documentation root, and runs the selected checks. Repository checks inspect the documentation layout and configuration. Live-site checks inspect published pages and discovery resources, including metadata and the links exposed through `llms.txt`.

A dedicated migration group checks documentation moving from Read the Docs hosting to Canonical domains. It covers configuration and live behavior such as canonical URLs, sitemaps, redirects, and HTTP responses for missing pages. Source inspection and published-site inspection contribute to the same report.

## Support individual scans and wider reviews

The local web interface presents results and guidance for failed checks. Batch YAML input lets a reviewer describe several repositories and their options in one place. Reports are cached on disk and include their generation time; a fresh scan can bypass the cache when needed.

Checks share a common interface, allowing the catalogue to grow without rebuilding the web interface for each addition. The CLI also reports failures through exit codes, making the same scanning workflow usable in automated checks.
