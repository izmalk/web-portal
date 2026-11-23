---
title: "How-to Auditor"
description: "An AI-assisted review skill that evaluates how-to guides against explicit documentation quality criteria."
weight: 60
collection: "tools"
category: "AI-assisted review"
role: "Hackathon project"
role_label: "Project context"
image: "cover.svg"
image_alt: "Conceptual illustration of a how-to guide reviewed against a structured checklist."
cover_source: "source-preview.png"
cover_fit: "contain"
cover_accent: "#E6A1B5"
cover_label: "Audit report excerpt"
cover_note: "Explicit criteria · contextual review · inspectable reports"
cover_alt: "An excerpt from an example How-to Auditor report in dark mode, framed with rose project artwork."
cover_caption: "An example audit report excerpt in dark mode, supplied by the source repository, with decorative framing. The original capture truncates some long lines."
links:
  - label: "Source code"
    url: "https://github.com/izmalk/hack-docs-qc"
examples:
  - kind: "Review protocol"
    title: "Inspect the evaluation process"
    description: "Read the skill's protocol for assessing a guide and reporting findings against explicit criterion IDs."
    action: "Read the review protocol"
    url: "https://github.com/izmalk/hack-docs-qc/blob/main/how-to-auditor/SKILL.md"
  - kind: "Criteria examples"
    title: "Compare good and poor practice"
    description: "Explore the examples that connect individual review criteria with concrete documentation patterns."
    action: "Read the criteria examples"
    url: "https://github.com/izmalk/hack-docs-qc/blob/main/how-to-auditor/context/how-to-criteria-examples.yaml"
gallery:
  - image: "source-preview.png"
    alt: "An excerpt from an example How-to Auditor report in dark mode, showing criterion IDs, findings and review rationale, with some long lines truncated in the original capture."
    caption: "Example audit report excerpt supplied by the source repository, in dark mode. The original capture truncates some long lines."
  - image: "criteria.webp"
    alt: "How-to Auditor's criteria table in dark mode, with IDs and requirements for how-to guide reviews."
    caption: "The how-to review criteria in the source repository's README, captured in dark mode, November 2026."
---

## Project summary

How-to guides help readers complete a practical task. Their quality depends on the sequence of actions, the clarity of the goal, the prerequisites, and whether the reader can recognise success. Some of those qualities are difficult to assess with simple text matching.

How-to Auditor explores an LLM-assisted approach to that review. It evaluates guides against predefined criteria derived from Diátaxis and other documentation practices, producing a structured PASS/FAIL report.

## My involvement

This is my project from Canonical's Engineering Sprint Hackathon in Madrid in 2026. It explores how technical writing principles can be expressed as a portable review protocol, supported by explicit criteria and examples of good and poor practice.

## Main challenges

A useful review has to judge the guide in context while giving the author a visible basis for understanding each finding. The skill combines a written evaluation protocol with a concise Diátaxis summary and concrete examples. Common checks cover heading structure, terminology, formatting, concise language and the handling of risky actions.

How-to-specific checks examine the practical goal, procedural structure, prerequisites, scope and verification of the final outcome. They also consider whether conceptual explanation or lengthy reference material interrupts the task.

The skill can be copied into an agent's skills directory and supplied with a guide as a local file, prompt input or URL. This remains a hackathon exploration of making review criteria repeatable and inspectable; its structured findings support an author's review of the document.
