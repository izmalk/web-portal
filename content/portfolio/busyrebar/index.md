---
title: "BusyRebar"
description: "A build write-up about creating a wireless LED matrix repeater for the BUSY Bar, covering hardware, software, and design trade-offs."
weight: 70
collection: "documentation"
category: "Blog post"
role: "Builder and author, personal project"
image: "/images/busy-led.jpg"
image_alt: "BusyRebar's wall-mounted RGB LED matrix displaying a BUSY Bar timer."
image_caption: "BusyRebar repeating the BUSY Bar display. Photo from the project blog post."
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
  - kind: "Implementation"
    title: "Trace a frame from bar to panel"
    description: "Follow the image through the Linux bridge and wireless LED controller."
    action: "Explore the workflow"
    url: "/posts/busyrebar/#how-it-works"
gallery:
  - image: "/images/busy-power.jpg"
    alt: "A USB power meter connected to BusyRebar, showing voltage and current during operation."
    caption: "Measuring the panel's power consumption. Photo from the project blog post."
---

## Project summary

BusyRebar is a wireless LED matrix repeater for the BUSY Bar. A Python bridge on a Linux host fetches the screen image, adapts it for a 64×32 RGB LED matrix, and sends the pixels over Wi-Fi to a Pimoroni Interstate 75 W controller.

The accompanying build write-up covers the hardware, assembly, software configuration, brightness schedule and background service setup, with photographs from the project.

## My involvement

I built BusyRebar so I could keep the BUSY Bar's controls within reach on my desk while making its display visible near the entrance to my home office. I documented the build, setup and design decisions in the blog post.

## Main challenges

The BUSY Bar's 72×16 screen does not map directly onto a 64×32 matrix. The write-up explains the cropping and scaling choices, alongside the practical constraints of powering the panel and adjusting brightness throughout the day.

The two-script design also introduces a dependency on a running, awake host. I documented that trade-off and the current behaviour when updates stop: the panel retains the last received frame. Making those limits explicit gives readers the context to assess the build and adapt it to their own setup.
