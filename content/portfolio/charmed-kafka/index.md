---
title: "Charmed Apache Kafka"
description: "Charmed Apache Kafka is an open-source operator that simplifies the deployment, scaling, and management of Apache Kafka clusters on physical hardware, VMs, and Kubernetes."
weight: 20
collection: "documentation"
category: "Product documentation"
role: "Technical Author, Canonical Data Platform"
image: "cover.svg"
image_alt: "Conceptual illustration of a Kafka cluster surrounded by documentation for deployment, security, and operations."
image_caption: "A conceptual illustration of the documentation's scope."
cover_source: "site.webp"
cover_accent: "#6DB8E9"
cover_label: ""
cover_badge: "Documentation"
cover_note: "Complete overhaul · tested tutorial · generated reference · automated release notes"
cover_alt: "The real Charmed Apache Kafka documentation in light mode, framed with blue project artwork."
cover_caption: "The published Charmed Apache Kafka documentation in light mode, captured in November 2026, with decorative framing."
links:
  - label: "Live docs"
    url: "https://canonical.com/data/kafka/docs/4/"
  - label: "Source code"
    url: "https://github.com/canonical/kafka-operator/tree/main/docs"
examples:
  - kind: "Tutorial"
    title: "Deploy your first Kafka cluster"
    description: "Follow the walkthrough I rebuilt, from environment setup to client integration and encryption."
    action: "Start the tutorial"
    url: "https://canonical.com/data/kafka/docs/4/tutorial/"
  - kind: "How-to guide"
    title: "Deploy via the Juju CLI"
    description: "Set up a Juju controller and model, deploy Kafka, and configure administrator access."
    action: "Read the deployment guide"
    url: "https://canonical.com/data/kafka/docs/4/how-to/deploy/deploy-anywhere/"
  - kind: "Reference"
    title: "Explore the configuration options"
    description: "Inspect a reference page built automatically from the operator's source code."
    action: "Open the reference"
    url: "https://canonical.com/data/kafka/docs/4/reference/_generated/configurations/"
  - kind: "Explanation"
    title: "Component overview"
    description: "Understand the components of a Charmed Apache Kafka deployment and how they fit together."
    action: "Explore the components"
    url: "https://canonical.com/data/kafka/docs/4/explanation/components/"
gallery:
  - image: "site.webp"
    alt: "The published Charmed Apache Kafka documentation in light mode, with a navigation sidebar and links organised around the product lifecycle."
    caption: "The published Charmed Apache Kafka documentation in light mode, captured in November 2026."
  - image: "tutorial.webp"
    alt: "The Kafka tutorial in light mode, showing its introduction, learning goals and a note about the tested example outputs."
    caption: "Tutorial: deploying and operating Charmed Apache Kafka. Captured in light mode, November 2026."
  - image: "deploy-juju.webp"
    alt: "The Juju CLI deployment guide in light mode, with VM and Kubernetes tabs, a deployment checklist and controller setup commands."
    caption: "How-to guide: deploying Charmed Apache Kafka with the Juju CLI. Captured in light mode, November 2026."
  - image: "actions.webp"
    alt: "The generated Kafka actions reference in light mode, showing action descriptions and a table of parameters, types, defaults and requirements."
    caption: "Generated reference: charm actions and their parameters. Captured in light mode, November 2026."
  - image: "components.webp"
    alt: "The components explanation in light mode, introducing the platform and comparing the broker, controller and balancer roles."
    caption: "Explanation: the Charmed Apache Kafka components. Captured in light mode, November 2026."
  - image: "navigation.webp"
    alt: "The complete Charmed Apache Kafka documentation menu in light mode, with Tutorial, How-to guides, Reference and Explanation fully expanded in four columns, plus Home and Contributor's guide."
    caption: "The complete documentation menu in light mode, fully expanded and arranged by section for readability. Captured in November 2026."
---

## Product summary

Charmed Apache Kafka is an open-source operator, packaged as a
[Juju charm](https://documentation.ubuntu.com/juju/3.6/reference/charm/), that simplifies
the deployment, scaling, and management of [Apache Kafka](https://kafka.apache.org/)
clusters on physical hardware, VMs, and Kubernetes, including deployments
on AWS, Azure, OpenStack, and VMware.

Like most of Canonical's documentation, this documentation follows [Diátaxis](https://diataxis.fr/):
a tutorial supports learning, how-to guides give practical instructions,
reference pages provide technical details, and explanation pages develop understanding
of core concepts.

## My involvement

I joined the team in 2024 and I'm responsible for all documentation for this product:
managing our plans, standards and automation, as well as reviewing all content changes
and writing new documents.

In addition to maintaining the [documentation](https://canonical.com/data/kafka/docs/4/)
for all major versions, I maintain documentation automation, testing and publishing.

## Main challenges

The product is very technical, and we expect our target audience to already be familiar with both
the Juju orchestrator and Apache Kafka. That way, we can concentrate on explaining only
the product's features without duplicating the upstream documentation for Apache Kafka and Juju.

When I joined, I started by refactoring the existing documentation, written mostly by engineers,
to improve clarity, trim unnecessary details and add missing content. After that, I recreated
the tutorial to provide a smoother and more robust experience. 

I then added automated testing for our tutorial to make sure it always stays correct. 
The test workflow extracts commands from the tutorial and runs them with Spread in a Multipass VM,
keeping the test tied to the documented procedure.

I also created a fully automated builder that generates reference documentation from source code at
build time, for example:
[Actions](https://canonical.com/data/kafka/docs/4/reference/_generated/actions/),
[Configurations](https://canonical.com/data/kafka/docs/4/reference/_generated/configurations/),
[Charm Statuses](https://canonical.com/data/kafka/docs/4/reference/_generated/statuses/).

To keep the documentation sources consistent, I introduced automated Markdown formatting
with MyST support, checked through pre-commit and CI. This makes formatting
checks part of the contribution workflow, alongside reviewing the technical content.

Finally, I developed
[a mostly deterministic solution](https://github.com/izmalk/release-notes-builder) to generate
our release notes, with particular attention to a strict factual basis drawn from the GitHub API and to formatting.
