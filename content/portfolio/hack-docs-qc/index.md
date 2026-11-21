---
title: "How-to Auditor"
description: "An AI-assisted review skill that evaluates how-to guides against explicit documentation quality criteria."
weight: 60
category: "AI-assisted review"
role: "Hackathon project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of a how-to guide reviewed against a structured checklist."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/hack-docs-qc"
gallery:
  - image: "source-preview.png"
    alt: "Example How-to Auditor report from the source repository, showing criterion IDs, findings, and review rationale."
    caption: "An example audit report. Screenshot from the project's source repository."
  - image: "detail.svg"
    alt: "Conceptual diagram showing a how-to guide and Diátaxis criteria feeding a structured audit report."
    caption: "Conceptual overview of the how-to review workflow."
---

## Turn review principles into explicit checks

How-to guides help readers complete a practical task. Their quality depends on the sequence of actions, the clarity of the goal, the prerequisites, and whether the reader can recognise success. Some of those qualities are difficult to assess with simple text matching.

How-to Auditor explores an LLM-assisted approach to that review. Created for Canonical's Engineering Sprint Hackathon in Madrid in 2026, it evaluates guides against predefined criteria derived from Diátaxis and other documentation practices. The [source repository](https://github.com/izmalk/hack-docs-qc#readme) contains the portable skill, the criteria, and supporting examples.

## Give the reviewer a defined framework

The skill combines a written evaluation protocol with a concise Diátaxis summary and examples of good and poor practice. Common checks cover heading structure, terminology, formatting, concise language, and the handling of risky actions.

How-to-specific checks examine the practical goal, procedural structure, prerequisites, scope, and verification of the final outcome. They also consider whether conceptual explanation or lengthy reference material interrupts the task. The model is asked to judge the guide in context and produce a structured PASS/FAIL report.

## Explore a portable review workflow

The skill folder can be copied into an agent's skills directory. A guide can then be supplied as a local file, through prompt input, or by URL. The repository documents its original OpenCode and OpenRouter setup and provides additional usage instructions.

This is a hackathon exploration of making documentation review criteria repeatable and inspectable. The explicit criteria and examples are central to the project: they give an author a visible basis for understanding and discussing the resulting audit.
