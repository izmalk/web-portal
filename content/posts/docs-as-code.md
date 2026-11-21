---
title: "Embracing the docs-as-code approach in software documentation"
date: 2024-01-14T20:14:17Z
draft: false
---

As a technical writer with more than a decade of experience in software development, I've come to prefer the docs-as-code approach. It applies familiar software development practices to documentation, including storing content as plain-text files in a Git repository. A build process turns that source into formats such as HTML, PDF or `.docx`.

Other tools and approaches for working with documentation include:

- Word processors, such as Microsoft Word.
- Dedicated technical writing software, such as Adobe FrameMaker and MadCap Flare.
- Knowledge base tools, such as Confluence and MediaWiki.
- Content management systems, such as WordPress and Joomla.
- Document collaboration platforms, such as SharePoint and Quip.
- Documentation generated from code comments, using tools such as Doxygen.

Here are my thoughts on the benefits and challenges of docs as code.

## Benefits

* **Version control**: systems such as Git provide a transparent history of changes, making updates easier to track and review.
* **Collaboration**: subject-matter experts, including software engineers, are often familiar with version control. A shared workflow makes collaboration easier as the documentation team grows.
* **Consistency**: content reuse, a visible change history and controlled merges help maintain consistency. Separating content from presentation also makes it easier to apply a common design.
* **Automation**: a continuous integration and deployment (CI/CD) pipeline can build, test and publish documentation in several formats and to several platforms from a single commit.
* **A single source of truth**: keeping content in one place, with a reliable process for changes, helps prevent discrepancies.
* **Open-source adoption**: many docs-as-code tools are open source, and the approach is widely used in open-source documentation.
* **Open formats**: plain-text formats are generally easy to convert, reducing dependence on a single vendor.

## Challenges

* **Learning curve**: contributors need familiarity with [Git](https://git-scm.com/) and a lightweight markup language, such as Markdown or AsciiDoc. This can be challenging for people without a technical background.
* **Setup and maintenance**: integrating documentation into the development workflow takes time and ongoing effort.
* **Tool dependencies**: build tools and publishing platforms require maintenance and may limit flexibility in some cases.

Docs as code is a strong fit for software projects where documentation changes alongside the product. Version control, reviews and automation help teams maintain documentation as part of everyday development.
