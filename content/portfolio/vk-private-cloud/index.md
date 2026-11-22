---
title: "VK Private Cloud"
description: "Administrator guides and test documentation for an on-premises cloud platform."
weight: 23
collection: "documentation"
category: "Cloud documentation"
role: "Documentation Lead, VK (formerly Mail.Ru Group)"
image: "screenshot.webp"
image_alt: "A page from the 2022 Private Cloud administrator guide explaining project resource quotas, with an interface screenshot and numbered steps in Russian."
cover_source: "project-quotas.webp"
cover_fit: "contain"
cover_accent: "#69ADFF"
cover_label: "Project quotas · 2022"
cover_badge: "Documentation"
cover_note: "Team leadership · administrator guides · test documentation"
cover_alt: "The Private Cloud administrator portal's project quotas screen, showing resource usage and quota controls, with decorative framing."
cover_caption: "Project quota management in the administrator guide, 12 August 2022, p.161, with decorative framing."
links:
  - label: "Current documentation"
    url: "https://cloud.vk.ru/docs/on-premises/private-cloud"
examples:
  - kind: "How-to guide"
    title: "Configure project resource quotas"
    description: "Read the illustrated procedure from the August 2022 administrator guide, p.161."
    action: "Read the guide sample"
    url: "/portfolio/vk-private-cloud/screenshot.webp"
  - kind: "Test documentation"
    title: "Connect a requirement to a test"
    description: "Inspect the actions and expected results in the August 2022 test methodology, p.44."
    action: "Inspect the test case"
    url: "/portfolio/vk-private-cloud/test-methodology.webp"
gallery:
  - image: "screenshot.webp"
    alt: "Private Cloud administrator guide page 161: project quota settings for virtual machines, CPU, memory, and disks, with numbered steps and an operational tip in Russian."
    caption: "Руководство администратора Private Cloud, 12 August 2022, p.161. Setting per-project quotas for virtual machines, CPU, memory, and storage."
  - image: "test-methodology.webp"
    alt: "A page from the Private Cloud test programme and methodology, setting out a requirement, test actions, and the expected result in Russian."
    caption: "Программа и методика испытаний Private Cloud, 25 August 2022, p.44. A structured test case connecting a requirement with actions and expected results."
---

## Product summary

VK Private Cloud provides cloud services on infrastructure in a customer's own data centre. Its documentation has to serve several audiences: administrators operating the platform, teams integrating its services, and specialists checking that it meets requirements.

The samples here come from the August 2022 administrator guide and test programme and methodology. They show operational instructions and the checks used to verify product requirements. The current documentation linked above is a newer set that has evolved since my work on the product.

## My involvement

I joined Mail.Ru Group, later renamed VK, in 2019 as a Senior Technical Writer on the Tarantool team. In 2020, I became Team Leader for the Private Cloud documentation team, recruiting and training writers and coordinating documentation work across the product.

In 2022, my responsibilities expanded to a second documentation team, covering both Private Cloud and Public Cloud products. This entry focuses on the Private Cloud material from that period.

## Main challenges

The documentation had to support both everyday administration and formal verification of a complex platform. The administrator guide combines architectural explanations with procedures for access management, compute, storage, networking, managed services and platform administration, alongside OpenStack command reference material and Terraform examples.

The quota-management sample shows how a procedure connects interface controls with numbered steps and an operational tip. The test programme and methodology addresses a different need: connecting a requirement to explicit actions and expected results. Together, the samples show the range of material the documentation team supported.
