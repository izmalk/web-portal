---
title: "VK Private Cloud"
description: "An enterprise private cloud platform based on OpenStack with a lot of custom components. Dozens of components, huge deployments and very complicated procedures."
weight: 23
collection: "documentation"
category: "Product documentation"
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
  - kind: "Administrator guide"
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
  - image: "platform-architecture.webp"
    alt: "Private Cloud architecture diagram showing PaaS and IaaS services above compute, Ceph and S3 nodes connected by a 40 Gbps network."
    caption: "Private Cloud user guide, 9 August 2022, p.184, figure 107. Platform architecture, cropped to the complete diagram and its original caption. Rendered in November 2026."
  - image: "kubernetes-storage.webp"
    alt: "Diagram of Kubernetes pods and persistent volumes connected through OpenStack Cinder to SSD Ceph, HDD Ceph and an iSCSI SSD disk shelf."
    caption: "Private Cloud user guide, 9 August 2022, p.189, figure 112. Kubernetes storage integration, cropped to the complete diagram and its original caption. Rendered in November 2026."
  - image: "monitoring-architecture.webp"
    alt: "The celery-zabbix monitoring diagram connecting Kubernetes regions and data centres, Celery API and worker processes, RabbitMQ, OpenStack, MariaDB and Zabbix."
    caption: "Private Cloud administrator guide, 12 August 2022, p.153, figure 31. Monitoring architecture, cropped to the complete diagram and its original caption. Rendered in November 2026."
  - image: "screenshot.webp"
    alt: "Private Cloud administrator guide page 161: project quota settings for virtual machines, CPU, memory, and disks, with numbered steps and an operational tip in Russian."
    caption: "Private Cloud administrator guide, 12 August 2022, p.161. Setting per-project quotas for virtual machines, CPU, memory, and storage."
  - image: "kubernetes-deployment.webp"
    alt: "Private Cloud user guide page 166, showing Kubernetes cluster configuration choices, optional Prometheus and NGINX services, and instructions for the next deployment step in Russian."
    caption: "Private Cloud user guide, 9 August 2022, p.166. Kubernetes cluster creation, combining a configuration screenshot with deployment instructions. Full page, rendered in November 2026."
  - image: "service-requirements.webp"
    alt: "Private Cloud technical specification page 13, with a table of services, resources and required actions covering virtual machines, storage, networks, load balancers, Kubernetes and databases, followed by API and CLI requirements in Russian."
    caption: "Private Cloud technical specification, 23 August 2022, p.13, table 2. Service requirements matrix and API/CLI requirements. Full page, rendered in November 2026."
  - image: "test-methodology.webp"
    alt: "A page from the Private Cloud test programme and methodology, setting out a requirement, test actions, and the expected result in Russian."
    caption: "Private Cloud test programme and methodology, 25 August 2022, p.44. A structured test case connecting a requirement with actions and expected results."
---

## Product summary

VK Private Cloud provides cloud services on infrastructure in a customer's own data centre (on premise). Its documentation has to serve several audiences: administrators operating the platform, teams integrating its services, and specialists checking that it meets requirements.

The samples here come from the August 2022 user guide, administrator guide, technical specification and test programme and methodology. They cover architecture, deployment, administration, product requirements and the checks used during formal acceptance tests. The current documentation linked above is a newer set that has evolved since my work on the product.

## My involvement

I joined Mail.Ru Group, later renamed VK, in 2019 as a Senior Technical Writer on the Tarantool team. In 2020, I became Team Leader for the Private Cloud documentation team, recruiting and training colleagues, planning and coordinating documentation work across the product, as well as developing standrads and automation.

In 2022, my responsibilities expanded to a second documentation team, covering both Private Cloud and Public Cloud products. This entry focuses on the Private Cloud material from that period.

## Main challenges

When I just joined the Private CLoud documentation team, their documentation was a mess:

- Stored on a confluence page as DOCX and PDFs
- Produced in MS Office suite
- Including versioning via filename
- Versioned through filenames
- Updated manually
- No concurrent changes supported

What I did in my first couple of weeks: I migrated all the existing content to a docs-as-code solution based on GitLab and Asciidoc.
That not only ensured consistent styling, but also helped me ensure proper transparent versioning and concurrent collaboration.

The documentation had to support initial deployment, everyday administration and formal verification of a complex platform. The administrator guide combines architectural explanations with procedures for access management, compute, storage, networking, managed services and platform administration, alongside OpenStack command reference material and Terraform examples.

The examples below are from an older PDF version that were built by my Asciidoctor-based builder back in the days.
The documentation included such documetns as: administrator guide, user guide, Test programme and methodology, etc.
Together, the samples below show the range of material the documentation team supported.
