# Portfolio authoring guide

Use this guide when creating or revising portfolio entries and their shared
presentation. The documentation profile below is based on the approved
[Charmed Apache Kafka entry](content/portfolio/charmed-kafka/index.md).
Its structure and editorial choices are the reference; its personal claims,
dates, product details and assets belong to that project.

Apply the relevant profile when an entry is requested for revision. Documentation
and tools use the same case-study progression, with an opening section appropriate
to their subject. Preserve project-specific evidence and historical context when
bringing entries into alignment.

## Common data and rendering conventions

- Store each project in `content/portfolio/<slug>/index.md`, with local images
  in the same leaf bundle. Preserve the slug and catalogue order during edits.
- `collection` selects a catalogue group: `documentation` or `tools`. Other or
  omitted values currently fall into tools. `category` is the descriptive label
  on the entry, such as `Product documentation` or `Developer documentation`.
  Collection display names come from `data/portfolio.yaml`.
- The template renders the header, resource links, hero, Markdown prose,
  **Examples**, **Gallery** and project navigation, in that order. Examples and
  Gallery appear when their front-matter lists are populated and are added to
  the local contents list automatically.
- Keep Examples and Gallery entirely in front matter. Do not add their headings,
  card HTML or a shortcode to the Markdown body.
- The generic archetype defaults to tools and uses generic body headings. Adapt
  its metadata and headings to this profile when creating a documentation entry.

## Documentation entries

This profile covers portfolio case studies about product documentation,
developer guides, administrator guides and similar documentation work. The
`documentation` collection also contains other texts, such as the BusyRebar
blog entry; adapt those to their actual subject rather than forcing them into
a product-documentation case study.

### Purpose and voice

Help a reader understand the product, the author's contribution and the
judgement behind the work, then give them concrete samples to inspect. Keep
the page a focused case study rather than reproducing the documentation itself.

- Describe the product neutrally; use first person for the author's involvement.
- Prefer specific verbs: rewrote, reviewed, reorganised, tested, generated,
  automated, maintained. Explain the constraint, the action and the supported
  result. Avoid generic praise and unsupported claims of impact.
- Use past tense for dated actions and completed roles, and present tense for
  ongoing responsibilities. For example, “I joined the team in 2024”, not
  “I've joined the team in 2024”.
- Explain only the technical detail needed to understand the documentation work.
  Use primary product sources for product facts and the author's supplied
  account for personal contributions. Identify meaningful gaps instead of
  filling them with plausible achievements.
- Keep wording plain and concise, with British spelling and the established
  product names. Use **Diátaxis**, **tutorial**, **how-to guide**, **reference**
  and **explanation** consistently. Describe a documentation set as following
  Diátaxis only when that is supported by the source.
- Preserve approved prose when making a narrow change. Consistency does not
  require every project to make the same claims or use identical sentences.

### Front matter

| Fields | Convention |
| --- | --- |
| `title`, `description` | Product name and one factual sentence explaining the product or documentation scope. The description also serves the catalogue; avoid promotional filler. |
| `collection`, `category`, `weight` | Use `collection: documentation`; choose the accurate category label and preserve intentional ordering. |
| `role`, optional `role_label` | State the author's supported role and relevant team or employer. The default visible label is “My role”. |
| `links` | Provide the published documentation and its source when available. Use labels such as “Live docs” and “Source code”; label archives and newer documentation explicitly. |
| `image`, `image_alt`, `image_caption` | Describe the fallback image accurately when one is supplied. Existing conceptual artwork remains a fallback, not evidence of the published work. |
| `cover_source`, other `cover_*` fields | Supply and describe a real screenshot in the shared SVG frame; see the cover conventions below. |
| `examples` | Curate specific work samples using the five fields shown below. |
| `gallery` | List genuine captures with descriptive `alt` text and useful `caption` text. |

For new entries, retain `draft: true` until the entry is ready. Do not change the
publication state of an existing entry as part of an unrelated edit.

### Markdown body

Use these three level-two (`##`) headings, in this order, for comparable
documentation case studies. Add project-specific subsections only when they
improve readability.

#### Product summary

Explain what the product does, who uses it and the context needed to understand
its documentation. Describe the documentation's audience and organisation when
known. Expand on the short description instead of merely repeating it. Link to
upstream concepts where useful; do not duplicate upstream documentation.

#### My involvement

State the author's role, period of involvement and actual responsibilities.
Distinguish writing, reviewing, planning, standards, team leadership, testing,
automation and publishing where relevant. Distinguish personal work from team
work, and ongoing ownership from a completed contribution.

#### Main challenges

Connect the documentation constraints with the author's decisions and results.
Kafka's account covers the audience's technical prerequisites, an overhaul of
existing material, a rebuilt and tested tutorial, generated reference and
automated release notes. Other projects need their own supported account.
Specific inline links can substantiate the work being discussed.

End the prose naturally here. The Examples cards provide the next step. Do not
append a generic “Explore the documentation” paragraph that repeats the header
links, or a loosely related project link without explaining its relevance.

### Hero and frame

Use an authentic documentation capture as `cover_source`. The same file can
supply the first unframed gallery image. The shared template builds the frame;
do not edit a generated cover SVG or bake the frame into the source capture.

- Use `cover_badge: "Documentation"` for documentation samples.
- Set the project accent with `cover_accent`; Kafka uses `#6DB8E9`. Retain the
  shared frame design rather than creating a different layout for each entry.
- For a live documentation capture, use `cover_label: ""` to omit the redundant
  label above the screenshot. Removing the field instead produces the default
  “Project screenshot” label. Keep a label when it conveys useful context, such
  as an archive date or the identity of an excerpt.
- Make `cover_note` a concise summary of the actual contribution, not another
  generic documentation label. Kafka's approved line is:
  **Complete overhaul · tested tutorial · generated reference · automated release notes**.
  Use those claims elsewhere only when supported by that project's history.
- Keep the bottom line on one readable line and inspect its fit in the rendered
  frame. Avoid repeating “documentation” across the optional labels and note.
- `cover_alt` describes the actual capture and frame; `cover_caption` identifies
  the source and capture context. Keep any fallback `image_alt` accurate too.
- Default fitting crops the screenshot from the top. Use `cover_fit: contain`
  when cropping would hide an important detail, particularly a historical sample.
- Preserve the 1200 × 750 frame, embedded capture and content-based cache key.

### Examples: useful next steps

For a documentation set that contains all four Diátaxis categories, select one
strong example from each, in this order:

| `kind` | Kafka baseline | Reader's next step |
| --- | --- | --- |
| `Tutorial` | Deploy your first Kafka cluster | Start the guided learning sequence. |
| `How-to guide` | Deploy via the Juju CLI | Read a specific task procedure. |
| `Reference` | Explore the configuration options | Inspect a concrete reference page. |
| `Explanation` | Component overview | Understand the product's components or design. |

Each entry uses this schema; the values below are a Kafka example:

```yaml
examples:
  - kind: "Tutorial"
    title: "Deploy your first Kafka cluster"
    description: "Follow the walkthrough I rebuilt, from environment setup to client integration and encryption."
    action: "Start the tutorial"
    url: "https://canonical.com/data/kafka/docs/4/tutorial/"
```

Use a short, specific title, one sentence explaining the sample and a clear
action such as “Read the deployment guide” or “Open the reference”. Link directly
to the relevant document, not another copy of the documentation home or source
repository link. The whole card is clickable. Four cards form a 2×2 grid when
the reading column is wide enough and stack when space is limited.

Do not invent missing categories or samples. For an incomplete or historical
documentation set, include the relevant material that can actually be inspected
and explain necessary context. Preserve links to the appropriate version or
archive rather than presenting newer work as evidence of an older contribution.

### Gallery: evidence and visual consistency

Use screenshots of the real documents, not generated illustrations of what
documentation might look like. For a live set with all four categories, follow
Kafka's sequence:

1. Documentation home page.
2. Tutorial sample.
3. How-to guide sample.
4. Reference sample.
5. Explanation sample.
6. Complete expanded navigation, when it usefully shows the scope of the set.

Kafka uses `site.webp`, `tutorial.webp`, `deploy-juju.webp`, `actions.webp`,
`components.webp` and `navigation.webp`. A gallery sample can differ from its
category's Examples-card destination: Kafka's card links to configurations,
while its reference screenshot shows Actions. Describe the actual capture.

- Prefer light mode for new live-documentation captures, following Kafka. Keep
  every screenshot within an entry in the same mode, including the navigation
  composition and the capture used for the hero.
- Use a consistent viewport and pixel density for document captures. Kafka's
  baseline is 1440 × 1060 CSS pixels at 2× density. Use WebP for new browser
  captures unless another format is needed, retaining readable text when enlarged.
- Inspect every capture for clipping, missing content, cookie overlays and
  rendering failures. Choose another suitable document if a page cannot provide
  a readable capture; do not rewrite its content to manufacture a better sample.
- For long navigation, expand every branch and arrange native captures in
  section columns. Preserve labels, ordering within sections and nesting;
  include utility links. State in the caption that the menu was rearranged.
  Keep the surrounding frame consistent with the capture's colour mode.
- Use alt text to describe what is visible. Use captions to identify the
  document/category, focus, mode and capture date, rather than making claims
  about impact. Record source URLs and capture details in the README image list.
- Preserve historical documents and the text within source images faithfully.
  Keep accompanying page text, captions and accessibility labels in English,
  including translated source document titles. Identify the source title,
  version, document date and page number, distinguishing printed
  page numbers from PDF page indices when needed. An old document's date and the
  date of its screenshot are different facts.
- Label current documentation links as current when the samples show earlier
  work. Do not replace an archive with a modern page without preserving that
  distinction. Adapt the gallery length and capture mode to the available evidence.

### Review before finishing

- The three prose sections explain product, personal involvement and decisions;
  claims are supported and dates/roles have not been inferred.
- Front matter supplies the hero, targeted Examples and Gallery. There are no
  duplicate section headings, layout shortcodes or redundant closing link lists.
- The cover note reflects this project's work and fits; labels convey useful
  information rather than repeating the same words.
- Examples point to the intended documents and versions. Missing Diátaxis types
  are not filled with invented or irrelevant links.
- Gallery captures are readable, consistently presented and accurately captioned;
  historical context and source provenance are preserved.
- A Hugo build includes the intended assets. For presentation changes, desktop
  and mobile layouts, both site colour modes, contents links and image zoom work.
- Report any evidence or verification gap. Do not describe a draft, failed capture
  or unavailable source as a completed or verified result.

## Tools and automation entries

Use the same presentation components as documentation entries: a real capture
in the shared hero frame, three prose sections, targeted Examples cards and an
evidence gallery. Set `collection: tools` and retain a specific category such as
documentation testing, publishing automation or documentation design.

### Markdown body and voice

Use these level-two headings, in order:

1. **Project summary**: explain the user's problem, what the tool does and the
   source-to-result workflow. Distinguish a theme, CLI, local web application or
   agent skill so the reader knows what they are looking at.
2. **My involvement**: state the supported personal contribution and context.
   Keep a personal project, a maintained Canonical project and a hackathon
   experiment distinct. A repository hosted under the author's account alone
   does not establish sole authorship or an employment context.
3. **Main challenges**: connect design choices to the problem: keeping tests
   tied to tutorial source, gathering release evidence, checking both source
   configuration and published behaviour, designing reusable navigation, or
   expressing review criteria clearly. Explain relevant limits without inventing
   accuracy figures, adoption metrics or claims that the tool was run for this
   portfolio page.

Prefer concrete, first-person contribution statements where supported. Retain
neutral descriptions of behaviour when personal ownership is not established.
Describe AI-generated findings as review material requiring judgement; do not
present them as verified defects or evidence that a procedure was executed.

### Examples and gallery

- Use two to four useful examples when available, with the same `kind`, `title`,
  `description`, `action` and `url` fields as documentation cards. Choose labels
  such as Usage, Configuration, Sample output, Source example or Review criteria.
  Diátaxis categories are appropriate only when the linked material fits them.
- Point to specific installation/usage sections, configuration references,
  annotation examples, templates, criteria or stored output. Avoid a closing
  paragraph or card that merely repeats the generic source-repository link.
- Prefer real interface or output captures. A source view is useful when it
  demonstrates the tool's input, annotations, configuration or review protocol.
  Identify stored examples as examples; never imply that capturing one means a
  new scan, test, audit or release-generation run took place.
- Replace generic workflow illustrations in the evidence gallery with useful
  captures where available. Preserve existing fallback artwork separately.
- Use one coherent capture mode within each entry. Prefer light mode for new
  browser documentation and GitHub captures; retain an application's native
  appearance when its genuine screenshots use a fixed palette. Do not recolour
  a real interface or crop away context that changes the meaning of its output.
- Label excerpts and placeholder revisions explicitly. Inspect screenshots for
  clipped lines, empty panels or stale destinations, and record provenance in
  the README alongside the other image sources.
- Make `cover_note` identify the tool's distinctive, supported work or workflow.
  Omit redundant labels with `cover_label: ""`; retain labels that distinguish
  an annotated input, an example output or a scan-progress view.

Apply the common build, responsive layout, colour-mode, contents and image-viewer
checks to these pages too. Review code-source captures as code, and interface
captures as interfaces; neither is a substitute for exercising the tool itself.

## Other writing in the documentation collection

An entry presenting a build article, such as BusyRebar, may use **Project summary**,
**My involvement** and **Main challenges**. Explain the project and the author's
writing/build contribution, then link to useful sections of the article rather
than forcing four Diátaxis samples. Use genuine project photographs with their
original colours and accurate captions. Reuse the site's existing photos where
possible instead of introducing duplicate copies.
