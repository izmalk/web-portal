---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
description: "A short description of the project and who it helps."
draft: true
weight: 70
# Catalogue section: documentation or tools. Other values default to tools.
collection: "tools"
category: "Documentation engineering"
role: "Author"
# Optional: role_label: "Project context" for a project type rather than a role.
# Save a cover image beside index.md, then uncomment these two fields.
# image: cover.webp
# image_alt: "Describe what the image shows."
# Optional: frame a real screenshot; image remains the illustration fallback.
# cover_source: screenshot.webp
# cover_fit: contain # Optional: show the whole screenshot instead of cropping.
# cover_label: "Project screenshot"
# Use cover_label: "" to omit a redundant screenshot label.
# cover_badge: "Open source" # Use "Documentation" for documentation samples.
# cover_note: "Summarise this project's supported contribution or workflow."
# cover_alt: "The project interface, framed with decorative artwork."
# cover_caption: "Describe the source of the screenshot."
# cover_accent: "#67D7A5"
# Optional: set featured: true to highlight the card.
links:
  - label: "Source code"
    url: "https://github.com/izmalk"
# Optional: add as many gallery images as you need.
# Optional: examples render automatically before Gallery. See PORTFOLIO.md.
# examples:
#   - kind: "Usage"
#     title: "A specific task or work sample"
#     description: "Explain what the reader can inspect."
#     action: "Read the usage guide"
#     url: "https://example.com/project/usage/"
# gallery:
#   - image: screenshot.webp
#     alt: "Describe the screenshot."
#     caption: "A brief caption."
---

## Project summary

Describe the problem, the audience, and what the project does.

## My involvement

Explain your role and the choices you made.

## Main challenges

Connect the project's constraints, your decisions and supported results.
For documentation entries, use Product summary as the opening heading.
Put Examples and Gallery in front matter rather than adding body headings.
