---
title: "Release Notes Builder"
description: "A mostly deterministic tool to turn GitHub commits and pull requests into structured release notes, with a repeatable workflow for editorial review."
weight: 40
collection: "tools"
category: "Documentation automation"
role: "Documentation automation"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of commit and pull-request records being organised into release notes."
cover_source: "generated-notes.webp"
cover_accent: "#EFC178"
cover_label: "Generated example · 777"
cover_note: "GitHub evidence · reusable templates · editorial review"
cover_alt: "An example of generated Charmed Apache Kafka release notes in light mode using the placeholder revision 777, framed with amber project artwork."
cover_caption: "Generated release-note example from charmed-apache-kafka-rev777.md, captured in light mode in November 2026. 777 is a placeholder, not a real release revision."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/release-notes-builder"
examples:
  - kind: "Generated output"
    title: "Inspect a release-note draft"
    description: "Read the stored Kafka example, including its categorised changes and linked pull requests. Revision 777 is a placeholder."
    action: "Read the generated example"
    url: "https://github.com/izmalk/release-notes-builder/blob/main/release-notes/charmed-apache-kafka-rev777.md"
  - kind: "Template"
    title: "See how the output is structured"
    description: "Inspect the Kafka Jinja2 template used to organise the collected changes into release notes."
    action: "Read the product template"
    url: "https://github.com/izmalk/release-notes-builder/blob/main/templates/kafka.md.j2"
gallery:
  - image: "generated-notes.webp"
    alt: "The generated Charmed Apache Kafka release-note example in light mode, showing the placeholder revision 777, summary, features and linked pull requests."
    caption: "Generated release-note example from the source repository, captured in light mode, November 2026. Revision 777 is a placeholder."
  - image: "template.webp"
    alt: "An excerpt from the Kafka release-note template in light mode, showing Jinja2 blocks and loops that structure the generated document."
    caption: "An excerpt from the Kafka Jinja2 template in the source repository, captured in light mode, November 2026."
---

## Project summary

Release Notes Builder generates structured release notes for Canonical Data & AI charms from GitHub commit and pull-request data. Its Python builder turns a commit range from one repository into a categorised document, rendered through Jinja2 templates.

An accompanying agent skill coordinates the broader product-level workflow from the product's own workspace, where it can consult metadata, existing documentation and previous release notes.

The deterministic script ensures complete coverage of changes and factual correctness, while the agent skill provides convenience and creativity for a human-readable summary.

## My involvement

I developed this project myself for release-note generation in my Charmed Apache Kafka work. My focus is a strict factual basis in GitHub API data and a consistent document format, with a mostly deterministic workflow that produces a draft for editorial review.

The initial success led me to apply this tool to other products I work on.

## Main challenges

Release notes need to connect engineering changes with information a product user can use. Choosing the commit range, identifying affected components and presenting the changes consistently all require care. The deterministic builder script gathers changes for one repository; component scope and the broader product context belong to the accompanying skill.

For products spanning several repositories, one can use auto-detection logic or an explicit component list that defines what the draft covers. Reference names are resolved against the repository, and uncertainty about scope is reported. Product-specific templates preserve the expected document structure.

The workflow can record selected components, resolved references, evidence, exclusions and blockers in a structured report. Existing release-note files are protected from accidental overwriting and used to create a template for new ones.

My main concern was reproducibility, given the non-deterministic nature of LLM output. When creating the accompanying skill, I provided clear criteria and examples of good and poor output. In my tests, many consecutive runs on the same content produced the same results.
