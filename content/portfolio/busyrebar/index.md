---
title: "BusyRebar"
description: "A build write-up about creating a wireless LED matrix repeater for the BUSY Bar, covering hardware, software, and design trade-offs."
weight: 70
collection: "documentation"
category: "Blog post"
role: "Builder and author, personal project"
image: "busy-led-retouched.webp"
image_alt: "BusyRebar's wall-mounted RGB LED matrix displaying a BUSY Bar timer."
image_caption: "The original project photograph, straightened and colour-corrected with AI."
cover_source: "busy-led-retouched.webp"
cover_fit: "contain"
cover_accent: "#6CD8F3"
cover_label: ""
cover_badge: "DIY build"
cover_note: "Hardware build · wireless LED display · documented setup"
cover_alt: "BusyRebar's wall-mounted RGB LED matrix showing a timer, with cyan decorative framing."
cover_caption: "The original project photograph, straightened and colour-corrected with AI, in the shared portfolio frame."
links:
  - label: "Read blog post"
    url: "/posts/busyrebar/"
  - label: "Source code"
    url: "https://github.com/izmalk/busyrebar"
examples:
  - kind: "Build guide"
    title: "Inspect the hardware build"
    description: "Read the parts list, assembly notes and power measurements from the project."
    action: "Read the hardware section"
    url: "/posts/busyrebar/#bill-of-materials"
  - kind: "Project README"
    title: "Set up and configure BusyRebar"
    description: "Explore the architecture, screen-scaling options, setup steps and configuration reference."
    action: "Read the README"
    url: "https://github.com/izmalk/busyrebar/blob/main/README.md"
gallery:
  - image: "busy-power-cropped.webp"
    alt: "Close-up of a USB power meter and its USB connectors, with the voltage and current readings visible."
    caption: "Measuring the panel's power consumption. AI-assisted crop of the project photograph."
  - image: "data-loop-dark.webp"
    alt: "Sequence diagram of the BusyRebar data loop: the Linux bridge fetches frames from BUSY Bar over HTTP, scales them and applies brightness, then sends RGB bytes over UDP to an Interstate 75 W receiver driving the LED matrix."
    caption: "Data loop from the project's GitHub README, captured in dark mode on 23 November 2026."
---

## Project summary

This is a pet project I built for myself.

BusyRebar is a wireless LED matrix repeater for the [BUSY Bar](https://busy.app/). A Python bridge on a Linux host fetches the screen image, adapts it for a 64×32 RGB LED matrix, and sends the pixels over Wi-Fi to a Pimoroni Interstate 75 W controller.

The accompanying build write-up covers the hardware, assembly, software configuration, brightness schedule and background service setup, with photographs from the project.

## My involvement

I built BusyRebar so I could keep the BUSY Bar's controls within reach on my desk while making its display visible near the entrance to my home office. I documented the build, setup and design decisions in the blog post.

## Main challenges

The BUSY Bar's 72×16 screen does not map directly onto a 64×32 matrix. The write-up explains the cropping and scaling choices, alongside the practical constraints of powering the panel and adjusting brightness throughout the day.

The two-script design also introduces a dependency on a running, awake host. I documented that trade-off and the current behaviour when updates stop: the panel retains the last received frame. Making those limits explicit gives readers the context to assess the build and adapt it to their own setup.
