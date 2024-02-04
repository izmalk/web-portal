---
title: "Embracing the Docs-as-Code Approach in Software Documentation"
date: 2024-01-14T20:14:17Z
draft: false
---

As a technical writer with more than a decade of experience in software development, I've come to embrace the Docs-as-Code methodology as my preferred approach. This technique, borrowing best practices from software development, transforms the way we handle documentation, treating it much like we do code. It usually involves storing the content in a Git repository as a text file. Our user-facing documentation needs to undergo a building process to create the output format(s) needed: HTML (web page), PDF, `.docx`, etc.

There are several alternatives to this approach, such as:
- Text Processors (e.g., Microsoft Word), 
- Dedicated Technical Writing Software (Adobe FrameMaker, MadCap Flare), 
- Knowledge Base Management Tools (Confluence, MediaWiki), 
- Content Management Systems (WordPress, Joomla), 
- Document Collaboration Platforms (SharePoint, Quip), 
- In-Code Documentation (Doxygen for code comments).

Here are my thoughts on the Pros and Cons of the Docs-as-Code approach:

Pros:

* **Version Control**: very transparent, reliable, and accountable process of managing version/changes with VCS like Git.
* **Collaboration**: SMEs (like software engineers) are familiar and experienced with VCS (like Git). The usage of VCS lets us scale the documentation development process to any size of the documentation team.
* **Consistency**: features like single sourcing, transparent change history, merging changes, forking, and branching let us preserve the consistency of documentation during any changes. Additionally, splitting content from design enables consistent representation of documentation.
* **Automation**: a DevOps specialist can set up CI/CD for the documentation building pipeline that will publish updated documentation in any number of formats to any number of platforms from just a single commit. This pipeline can even include automated tests for the documentation content and output.
* **Single Source of Truth**: maintaining all content in one place, avoiding discrepancies, and having a reliable change process.
* **Popularity in Open Source**: most tools used in Docs-as-Code are open source, and the approach itself is very popular in open-source documentation.
* **Open formats**: simple text formats are usually easily converted. No vendor locks.

Cons:
* **Learning Curve**: requires familiarity with [Git](https://git-scm.com/) and a particular lightweight markup language (e.g., Markdown, AsciiDoc), which can be challenging for non-technical contributors.
* **Overhead**: integrating documentation into the development workflow adds initial setup and maintenance efforts.
* **Tool Dependency**: relies on specific tools and platforms, which might limit flexibility in some cases.

In conclusion, while Docs-as-Code is not a one-size-fits-all solution, its alignment with agile practices and software development tools, as well as its emphasis on transparency and collaboration, make it a standout choice for software products and projects where documentation may be as dynamic as the software it supports.