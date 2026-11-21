---
title: "STAT"
description: "Spread Tutorial Automated Testing: run the commands in a tutorial to help documentation keep pace with the product."
weight: 30
category: "Documentation testing"
role: "Personal project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of a Markdown tutorial becoming executable tests in a virtual machine."
cover_source: "source-preview.webp"
cover_accent: "#B6A1EE"
cover_label: "Tutorial source example"
cover_note: "MyST source · Spread · Multipass"
cover_alt: "A genuine STAT tutorial source example and its test annotations, framed with violet project artwork."
cover_caption: "A sample tutorial from the STAT repository, with decorative framing. This is source code, not a new test run."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/stat"
gallery:
  - image: "source-preview.webp"
    alt: "The sample-page.md tutorial in the STAT repository, showing MyST shell blocks and test annotations."
    caption: "The repository's sample tutorial source. Captured from GitHub in November 2026."
  - image: "detail.svg"
    alt: "Conceptual diagram showing tutorial source, command extraction, and sequential execution with Spread."
    caption: "Conceptual overview of the tutorial testing workflow."
---

## Test the tutorial itself

A tutorial can be clear, well structured, and still fail when a reader follows it. Commands change, deployments take time to settle, and examples drift away from the product they describe. STAT — Spread Tutorial Automated Testing — addresses that gap by running the commands from the documentation itself.

The project extracts shell commands from MyST Markdown tutorial pages and executes them sequentially in a clean virtual machine through Spread. It was developed for Canonical Charmed Operator tutorials; the [project README](https://github.com/izmalk/stat#readme) links to integrations for Charmed OpenSearch, Charmed Apache Kafka, and Charmed Apache Spark.

## Keep the source close to the test

Test instructions live in HTML comments alongside the tutorial text. They remain invisible in the published page while telling STAT which blocks to skip, where to wait for a deployment, and what state to verify. Hidden commands can supply a non-interactive alternative when the reader-facing example expects a prompt.

The extractor produces shell scripts and Spread task definitions. Spread provisions a Multipass virtual machine, copies the project into it, and runs the tasks in the intended order. Generated test files are recreated before a run, so the tutorial remains the source of the commands.

## Make failures useful

The workflow includes modes for extracting tests, checking whether generated files are current, running the complete tutorial, and debugging a failed run interactively. Diagnostic helpers collect Juju and host information to support investigation.

STAT currently supports MyST Markdown; reStructuredText support is planned. The repository includes integration templates for Make, tox, and GitHub Actions, along with examples of the annotation syntax.
