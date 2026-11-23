---
title: "STAT"
description: "Spread Tutorial Automated Testing: run the commands in a tutorial to help documentation keep pace with the product."
weight: 30
collection: "tools"
category: "Documentation testing"
role: "Personal project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of a Markdown tutorial becoming executable tests in a virtual machine."
cover_source: "source-preview.webp"
cover_accent: "#B6A1EE"
cover_label: "Tutorial source example"
cover_note: "Annotated tutorials · repeatable VM tests · CI integration"
cover_alt: "A STAT tutorial source excerpt and its test annotations in dark mode, framed with violet project artwork."
cover_caption: "Sample tutorial source from the STAT repository, captured from GitHub in dark mode on 23 November 2026, with decorative framing. This is source code, not a new test run."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/stat"
examples:
  - kind: "Annotated source"
    title: "Inspect a testable tutorial"
    description: "Read the sample tutorial's shell blocks alongside the annotations that control their execution."
    action: "Read the annotated example"
    url: "https://github.com/izmalk/stat/blob/main/examples/sample-page.md?plain=1"
  - kind: "Integration"
    title: "See the Kafka tutorial tests"
    description: "Explore how the testing workflow is integrated into the Charmed Apache Kafka repository."
    action: "Inspect the integration"
    url: "https://github.com/canonical/kafka-operator/tree/main/tests/tutorial"
gallery:
  - image: "source-preview.webp"
    alt: "The STAT repository's sample-page.md tutorial in dark mode, showing MyST shell blocks and test annotations."
    caption: "Sample tutorial source excerpt, captured from GitHub in dark mode on 23 November 2026."
  - image: "annotations.webp"
    alt: "STAT's annotation reference in dark mode, with a table explaining the form and effect of the tutorial test controls."
    caption: "The complete annotation table in the project README, captured from GitHub in dark mode on 23 November 2026."
---

## Project summary

A tutorial can be clear, well structured, and still fail when a reader follows it. Commands change, deployments take time to settle, and examples drift away from the product they describe. STAT (Spread Tutorial Automated Testing) addresses that gap by running the commands from the documentation itself.

The project extracts shell commands directly from MyST Markdown tutorial pages and executes them sequentially in a clean virtual machine through [Spread](https://github.com/canonical/spread). It was developed for Canonical Charmed Operator tutorials, and tested for Charmed OpenSearch, Charmed Apache Kafka and Charmed Apache Spark.

## My involvement

STAT is one of my personal documentation automation projects. Its focus is the connection between the instructions an author writes and the commands that are tested as a product changes.

The repository packages the command extractor, diagnostic helpers and integration templates for Make, tox and GitHub Actions. MyST Markdown is supported; reStructuredText support remains planned.

## Main challenges

The test needs to follow the tutorial while accounting for operations that take time, interactive prompts and state that must be checked between steps. Additional invisible test directives live in HTML comments alongside the tutorial text: they identify blocks to skip, waits, hidden commands and assertions without adding that machinery to the published page.

The extractor produces shell scripts and Spread task definitions. [Spread](https://github.com/canonical/spread) provisions a [Multipass](https://canonical.com/multipass) virtual machine and runs the tasks in order. Generated files are recreated before a run, keeping the tutorial source connected to the commands under test.

When a procedure fails, the author needs enough information to investigate it. The workflow includes extraction, freshness checks, complete runs and interactive debugging; diagnostic helpers collect Juju and host information for that investigation.
