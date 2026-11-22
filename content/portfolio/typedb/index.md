---
title: "TypeDB"
description: "TypeDB is a strongly typed database combining the PERA model with polymorphic queries in fully composable TypeQL. The documentation covered TypeDB, TypeQL, native drivers and TypeDB Cloud."
weight: 22
collection: "documentation"
category: "Developer documentation"
role: "Senior Technical Writer, TypeDB (formerly Vaticle), 2022–2024"
image: "site.webp"
image_alt: "The archived TypeDB documentation overview from June 2024."
cover_source: "site.webp"
cover_accent: "#49D4C7"
cover_badge: "Documentation"
cover_label: "June 2024 archive"
cover_note: "Developer guides · API reference · documentation automation"
cover_alt: "The TypeDB documentation overview from the Internet Archive's 15 June 2024 snapshot, framed with teal project artwork."
cover_caption: "The documentation snapshot dated 15 June 2024, captured from the Internet Archive in November 2026, with decorative framing."
links:
  - label: "June 2024 archive"
    url: "https://web.archive.org/web/20240615140608mp_/https://typedb.com/docs/home/overview"
examples:
  - kind: "Tutorial"
    title: "Learn TypeDB through a sample database"
    description: "Follow the June 2024 course through reading data, writing data and defining schemas."
    action: "Explore the learning course"
    url: "https://web.archive.org/web/20240620100948mp_/https://typedb.com/docs/learn/overview"
  - kind: "How-to guide"
    title: "Install TypeDB and its clients"
    description: "Explore the June 2024 installation guidance for database deployments, Studio, Console and drivers."
    action: "Read the installation guide"
    url: "https://web.archive.org/web/20240620100951mp_/https://typedb.com/docs/home/install/overview"
  - kind: "Reference"
    title: "Look up TypeQL queries"
    description: "Browse the archived reference for query types, statements, patterns and modifiers."
    action: "Explore the TypeQL reference"
    url: "https://web.archive.org/web/20240620100947mp_/https://typedb.com/docs/typeql/overview"
  - kind: "Explanation"
    title: "Understand the ideas behind TypeDB"
    description: "Read the June 2024 explanation of the database's language, data model and logic engine."
    action: "Read the conceptual introduction"
    url: "https://web.archive.org/web/20240620101010mp_/https://typedb.com/docs/learn/1-why-typedb/1-why-typedb"
gallery:
  - image: "site.webp"
    alt: "The archived TypeDB documentation overview, with the Internet Archive toolbar showing 15 June 2024, documentation navigation, and getting-started links."
    caption: "TypeDB documentation overview as archived on 15 June 2024. Original dark appearance, captured from the Internet Archive in November 2026."
  - image: "learning-course.webp"
    alt: "The archived TypeDB learning course in its original dark appearance, with a bookstore database example and a lesson-by-lesson curriculum."
    caption: "Tutorial: the TypeDB learning course, archived on 20 June 2024. Original dark appearance, captured in November 2026."
  - image: "installation.webp"
    alt: "The archived TypeDB installation overview in its original dark appearance, with links to deployment options, Studio, Console and client drivers."
    caption: "How-to guidance: TypeDB and client installation, archived on 20 June 2024. Original dark appearance, captured in November 2026."
  - image: "typeql.webp"
    alt: "The archived TypeQL reference in its original dark appearance, showing the language introduction and a catalogue of query types."
    caption: "Reference: the TypeQL query language, archived on 20 June 2024. Original dark appearance, captured in November 2026."
  - image: "why-typedb.webp"
    alt: "The archived Why TypeDB explanation in its original dark appearance, discussing database design and showing a query example."
    caption: "Explanation: Why TypeDB, archived on 20 June 2024. Original dark appearance, captured in November 2026."
---

## Product summary

TypeDB is a strongly typed database for modelling interconnected data and querying it through TypeQL. Its main features include:

- **Strong typing and the PERA model.** The [polymorphic entity–relation–attribute (PERA) model](https://typedb.com/docs/typeql-reference/data-model/) represents entities, relationships and their attributes, with a schema defining types and their permitted connections. TypeDB checks queries against this schema before executing them, helping catch invalid combinations of types.
- **Fully composable and declarative TypeQL.** Developers describe the data they want through [declarative patterns](https://typedb.com/docs/typeql-reference/patterns/), combining conditions with conjunction, disjunction and negation. The same language supports schema definitions, data changes and queries.
- **Polymorphic queries.** A query written for a parent type can also match its subtypes. For example, a query for media files can include images, videos and newly added audio files without a separate query for each.
- **Reusable query logic.** [TypeQL functions](https://typedb.com/docs/typeql-reference/functions/) let developers express business logic as reusable queries, including nested and recursive computations. These functions can be called within query patterns to derive results from stored data.
- **Transactional operations.** Reads, writes and schema changes run within [transactions](https://typedb.com/docs/core-concepts/typedb/transactions/), each with a consistent snapshot of the database. Changes are committed together or rolled back, helping applications keep related updates consistent.
- **Native drivers and developer tools.** Language-specific drivers provide APIs for connections, queries and transactions. TypeDB Studio offers a graphical development environment, while TypeDB Console supports interactive use and scripts.
- **Self-hosted and cloud deployments.** [TypeDB Community Edition](https://typedb.com/docs/home/install/ce/) is open source, and [TypeDB Enterprise](https://typedb.com/docs/home/install/enterprise/) supports deployments on your own infrastructure. TypeDB Cloud offers managed deployments with security features and high availability.

Its documentation helps developers install the product, learn its concepts, build applications and look up technical details.

The examples and gallery below show the TypeDB 2.x documentation archived in June 2024, during my time at the company. The product summary links to the current documentation.

## My involvement

I worked at TypeDB, formerly Vaticle, from 2022 to 2024 as a Senior Technical Writer and the company's first documentation specialist. Working with the engineering team, I documented its open-source, enterprise and cloud products.

My work covered installation guides, quick starts, developer guides, tutorials and API references, including all the language-specific examples available at the time.
Alongside the writing, I collaborated with engineers on CI/CD automation, documentation tests and API reference generation.

My role extended beyond overhauling the documentation. I also collaborated with engineers on ideas for improving the user experience and on testing.

## Main challenges

The documentation had to introduce TypeDB's distinctive data model and query language while supporting developers who needed practical instructions or precise reference material. The work therefore ranged from installation and first queries to application development and API details.

My main goal was to keep readers engaged and inspire them to try the product and experiment with it.
TypeDB takes a novel approach to data modelling and querying.
To explain its benefits and what made it different, I had to introduce the underlying principles and demonstrate practical use cases.

The archived examples preserve both the guided material and the reference structure from that period.
