---
title: "Release Notes Builder"
description: "Turn GitHub commits and pull requests into structured release notes, with a repeatable workflow for editorial review."
weight: 40
collection: "tools"
category: "Publishing automation"
role: "Personal project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of commit and pull-request records being organised into release notes."
cover_source: "generated-notes.webp"
cover_accent: "#EFC178"
cover_label: "Generated example · 777"
cover_note: "Repository history · Jinja2 templates · release notes"
cover_alt: "An example of generated Charmed Apache Kafka release notes using the placeholder revision 777, framed with amber project artwork."
cover_caption: "Generated release-note example from charmed-apache-kafka-rev777.md. 777 is a placeholder, not a real release revision."
links:
  - label: "Generated example"
    url: "https://github.com/izmalk/release-notes-builder/blob/main/release-notes/charmed-apache-kafka-rev777.md"
  - label: "Source code"
    url: "https://github.com/izmalk/release-notes-builder"
gallery:
  - image: "generated-notes.webp"
    alt: "The generated Charmed Apache Kafka release-note example, showing the placeholder revision 777, summary, features, and linked pull requests."
    caption: "Generated release-note example from the source repository. Revision 777 is a placeholder."
  - image: "detail.svg"
    alt: "Conceptual diagram connecting a verified commit range, categorised changes, and a release-note draft for review."
    caption: "Conceptual overview of the release notes workflow."
---

## From repository history to a readable release

Release notes need to connect engineering changes with the information a product user needs. Collecting commits is one part of the work; choosing the right range, identifying affected components, and presenting changes consistently all require care.

Release Notes Builder generates structured release notes for Canonical Data & AI charms from GitHub commit and pull-request data. Its Python builder turns a commit range from a single repository into a categorised document, rendered through Jinja2 templates. The [repository](https://github.com/izmalk/release-notes-builder#readme) also contains an agent skill for coordinating the broader product-level workflow.

## Separate collection from editorial decisions

The standalone builder gathers changes for one repository. The accompanying skill works from the product's own workspace, where it can consult metadata, existing documentation, and previously published notes. That context helps it establish the release range and follow the product's established structure.

For products spanning multiple repositories, the workflow supports an explicit component list. Reference names are resolved against the repository, and uncertainty about scope is reported. This makes the boundary of a draft visible to the person reviewing it.

## Produce a draft with a review trail

The workflow is designed around a document that can be checked before publication. Its unattended mode can record selected components, resolved references, evidence, exclusions, and blockers in a structured report. Existing release-note files are protected from accidental overwriting.

The result is a repeatable starting point for editorial work: collected source material, a consistent document structure, and a record of what the draft covers. The source repository documents both direct CLI use and installation of the agent skill in a target product repository.
