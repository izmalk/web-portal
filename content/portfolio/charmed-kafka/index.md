---
title: "Charmed Apache Kafka"
description: "Charmed Apache Kafka is an open-source operator, that simplifies the deployment, scaling, and management of Apache Kafka clusters on physical hardware, VMs, and Kubernetes."
weight: 20
collection: "documentation"
category: "Product documentation"
role: "Technical Author, Canonical Data Platform"
image: "cover.svg"
image_alt: "Conceptual illustration of a Kafka cluster surrounded by documentation for deployment, security, and operations."
image_caption: "A conceptual illustration of the documentation's scope."
cover_source: "site.webp"
cover_accent: "#6DB8E9"
cover_label: "Live documentation"
cover_badge: "Documentation"
cover_note: "Deploy, secure, and operate · product documentation"
cover_alt: "The real Charmed Apache Kafka documentation, framed with blue project artwork."
cover_caption: "The published Charmed Apache Kafka documentation, captured in November 2026, with decorative framing."
links:
  - label: "Live docs"
    url: "https://canonical.com/data/kafka/docs/4/"
  - label: "Source code"
    url: "https://github.com/canonical/kafka-operator/tree/main/docs"
gallery:
  - image: "site.webp"
    alt: "The published Charmed Apache Kafka documentation, with a navigation sidebar and links organised around the product lifecycle."
    caption: "The published Charmed Apache Kafka documentation, captured in November 2026."
  - image: "detail.svg"
    alt: "Four documentation modes: tutorials for learning, how-to guides for tasks, reference for lookup, and explanation for understanding."
    caption: "The Diátaxis structure used by the documentation. Conceptual overview."
---

## Product summary

Charmed Apache Kafka is an open-source operator, packaged as a
[Juju charm](https://documentation.ubuntu.com/juju/3.6/reference/charm/), that simplifies
the deployment, scaling, and management of [Apache Kafka](https://kafka.apache.org/)
clusters on physical hardware, VMs, and Kubernetes, including deployments
on AWS, Azure, OpenStack, and VMware.

As most Canonical's documentation, the documentation follows Diátaxis:
a tutorial supports learning, how-to guides cover practical instructions,
reference pages provide technical details, and explanation pages develop understanding
of core concepts.

## My involvement

I've joined the team in 2024 and I'm responsible for all documentation for this product:
managing our plans, standards and automation, as well as reviewing all content changes,
and writing new documents.

On top of all documentation aviailable at https://canonical.com/data/kafka/docs/4/
for all major versions, I'm maintaining documentation automation, testing and publishing.

## Main challenges

The product is very technical and we expect our target audience to be familiar with both
Juju orchestrator and Apache Kafka already. That way we can concentrate on explaining only
the product's features without duplicating upstream documentation of Apache Kafka and Juju.

When I joined, I started by refactoring the existing documentation, written mostly by engineers,
to improve clarity, trim unnecessary details and add missing bits. After that, I recreated
the tutorial to provide a smoother and more robust experience. And then I added automated
testing for our tutorial to make sure it always stay correct, tested for every change in either
the product or the tutorial itself.

I also created a fully automated reference notes builder from source code on build time:
[Actions](https://canonical.com/data/kafka/docs/4/reference/_generated/actions/),
[Configurations](https://canonical.com/data/kafka/docs/4/reference/_generated/configurations/),
[Charm Statuses](https://canonical.com/data/kafka/docs/4/reference/_generated/statuses/).

Finally, I developed
[mostly deterministic solution](https://github.com/izmalk/release-notes-builder) to generate
our release notes with particular attention on strict factual basis from GitHub API and formatting.

## Explore the documentation

Visit the [published documentation](https://canonical.com/data/kafka/docs/4/) to explore the reader experience. The [documentation source](https://github.com/canonical/kafka-operator/tree/main/docs) sits alongside the operator code, supporting a docs-as-code workflow.

For related work on testing documented procedures, see [STAT](/portfolio/stat/).
