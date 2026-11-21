---
title: "VK Private Cloud"
description: "Administrator guides and test documentation for an on-premises cloud platform."
weight: 23
collection: "documentation"
category: "Cloud documentation"
role: "Documentation Lead, VK"
image: "screenshot.webp"
image_alt: "A page from the 2022 Private Cloud administrator guide explaining project resource quotas, with an interface screenshot and numbered steps in Russian."
cover_source: "project-quotas.webp"
cover_fit: "contain"
cover_accent: "#69ADFF"
cover_label: "Project quotas · 2022"
cover_badge: "Documentation"
cover_note: "Cloud administration · resource quotas · test methodology"
cover_alt: "The Private Cloud administrator portal's project quotas screen, showing resource usage and quota controls, with decorative framing."
cover_caption: "Project quota management in the administrator guide, 12 August 2022, p.161, with decorative framing."
links:
  - label: "Current documentation"
    url: "https://cloud.vk.ru/docs/on-premises/private-cloud"
gallery:
  - image: "screenshot.webp"
    alt: "Private Cloud administrator guide page 161: project quota settings for virtual machines, CPU, memory, and disks, with numbered steps and an operational tip in Russian."
    caption: "Руководство администратора Private Cloud, 12 August 2022, p.161. Setting per-project quotas for virtual machines, CPU, memory, and storage."
  - image: "test-methodology.webp"
    alt: "A page from the Private Cloud test programme and methodology, setting out a requirement, test actions, and the expected result in Russian."
    caption: "Программа и методика испытаний Private Cloud, 25 August 2022, p.44. A structured test case connecting a requirement with actions and expected results."
---

## Documentation for a private cloud

VK Private Cloud provides cloud services on infrastructure in a customer's own data centre. Its documentation has to serve several audiences: administrators operating the platform, teams integrating its services, and specialists checking that it meets requirements.

I led the Private Cloud documentation team at VK, recruiting and training writers and coordinating documentation work across a complex cloud product. The samples here come from the 2022 administrator guide and test programme and methodology.

## Explain operations and make requirements testable

The administrator guide combines architectural explanations with practical procedures, covering access management, compute, storage, networking, managed services, and platform administration. It also includes OpenStack command reference material and Terraform manifest examples. The quota-management page in the gallery combines a product-interface screenshot with numbered steps and an operational tip.

The test programme and methodology serves a different purpose: it connects requirements to a sequence of checks and their expected results. The second sample shows that structure in a test case, making the basis for verification explicit.

## The historical samples and today's documentation

The gallery presents selected pages from the August 2022 documents. The [current VK Private Cloud documentation](https://cloud.vk.ru/docs/on-premises/private-cloud) is a substantially newer documentation set and has evolved since my work on the product.
