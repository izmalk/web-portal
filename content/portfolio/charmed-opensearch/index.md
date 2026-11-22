---
title: "Charmed OpenSearch"
description: "Charmed OpenSearch is an open-source Juju operator that simplifies the deployment, scaling and management of OpenSearch clusters on physical hardware, VMs, and Kubernetes."
weight: 21
collection: "documentation"
category: "Product documentation"
role: "Technical Author, Canonical Data Platform"
image: "site.webp"
image_alt: "The Charmed OpenSearch documentation home page in light mode."
cover_source: "site.webp"
cover_accent: "#6DB8E9"
cover_label: ""
cover_badge: "Documentation"
cover_note: "Documentation overhaul · tutorial testing · automated formatting"
cover_alt: "The published Charmed OpenSearch documentation in light mode, framed with blue project artwork."
cover_caption: "The published Charmed OpenSearch documentation in light mode, captured in November 2026, with decorative framing."
links:
  - label: "Live docs"
    url: "https://canonical.com/data/opensearch/docs/2/"
  - label: "Source code"
    url: "https://github.com/canonical/opensearch-operator"
examples:
  - kind: "Tutorial"
    title: "Deploy your first OpenSearch cluster"
    description: "Follow a guided sequence through deployment, encryption, client integration and scaling."
    action: "Start the tutorial"
    url: "https://canonical.com/data/opensearch/docs/2/tutorial/"
  - kind: "How-to guide"
    title: "Deploy a standard cluster"
    description: "Prepare the substrate and deploy OpenSearch using the Juju CLI."
    action: "Read the deployment guide"
    url: "https://canonical.com/data/opensearch/docs/2/how-to/deploy/standard/"
  - kind: "Reference"
    title: "Check the system requirements"
    description: "Look up the software, hardware, network and kernel requirements for a deployment."
    action: "Open the requirements"
    url: "https://canonical.com/data/opensearch/docs/2/reference/system-requirements/"
  - kind: "Explanation"
    title: "Understand node roles"
    description: "Explore the roles of OpenSearch nodes and how they shape cluster topology."
    action: "Explore node roles"
    url: "https://canonical.com/data/opensearch/docs/2/explanation/node-roles/"
gallery:
  - image: "site.webp"
    alt: "The published OpenSearch documentation in light mode, with topic navigation and links grouped around the product lifecycle."
    caption: "The Charmed OpenSearch documentation home page. Captured in light mode, November 2026."
  - image: "tutorial.webp"
    alt: "The OpenSearch tutorial in light mode, showing prerequisites and the sequence of learning tasks."
    caption: "Tutorial: deploying and operating an OpenSearch cluster. Captured in light mode, November 2026."
  - image: "deploy-standard.webp"
    alt: "The standard deployment guide in light mode, with VM and Kubernetes tabs and deployment prerequisites."
    caption: "How-to guide: deploying a standard cluster with Juju. Captured in light mode, November 2026."
  - image: "requirements.webp"
    alt: "The system requirements reference in light mode, listing software and hardware requirements."
    caption: "Reference: software, hardware and networking requirements. Captured in light mode, November 2026."
  - image: "node-roles.webp"
    alt: "The node roles explanation in light mode, describing cluster roles and topology."
    caption: "Explanation: node roles and cluster topology. Captured in light mode, November 2026."
  - image: "navigation.webp"
    alt: "The complete OpenSearch navigation in light mode, including all four documentation categories and the Dashboards documentation."
    caption: "The complete menu, fully expanded and arranged in columns, with the Dashboards subtree beneath Explanation. Captured in light mode, November 2026."
---

## Product summary

Charmed OpenSearch is an open-source operator, packaged as a
[Juju charm](https://documentation.ubuntu.com/juju/3.6/reference/charm/), that simplifies
the deployment, scaling and management of [OpenSearch](https://opensearch.org/)
clusters on physical hardware, VMs and cloud environments including AWS, Azure,
OpenStack and VMware. The documentation covers both the machine charm and the
Kubernetes charm.

Like most of Canonical's documentation, this documentation follows [Diátaxis](https://diataxis.fr/):
a tutorial supports learning, how-to guides give practical instructions,
reference pages provide technical details, and explanation pages develop understanding
of core concepts.

## My involvement

I'm responsible for all documentation for this product since 2025:
managing our plans, standards and automation, as well as reviewing all content changes
and writing new documents.

In addition to maintaining the [documentation](https://github.com/canonical/opensearch-operator)
for all major versions, I maintain documentation automation, testing and publishing.

## Main challenges

The product is very technical. The tutorial expects readers to have experience
with a Linux command line and OpenSearch concepts such as indices and users.
The documentation can therefore focus on the charm-specific work: deploying
with Juju, enabling TLS, integrating applications and operating a cluster,
without duplicating the upstream OpenSearch documentation.

Working with the team, I restructured, rewrote and updated much of the existing documentation.
This included revising deployment and operational guides and adding explanations
of node roles, cluster health, performance profiles, storage and TLS certificates.
The aim was to make the instructions clearer and give readers the context needed
to understand configuration choices.

I also updated the tutorial and added automated testing
so its instructions could be checked against a real deployment. The test workflow
extracts commands from the tutorial and runs them with Spread in a Multipass VM,
keeping the test tied to the documented procedure.

To keep the documentation sources consistent, I introduced automated Markdown formatting
with MyST support, checked through pre-commit and CI. This makes formatting
checks part of the contribution workflow, alongside reviewing the technical content.
