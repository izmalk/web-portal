---
title: "BusyRebar"
description: "A build write-up about creating a wireless LED matrix repeater for the BUSY Bar, covering hardware, software, and design trade-offs."
weight: 70
collection: "documentation"
category: "Blog post"
role: "Author"
image: "/images/busy-led.jpg"
image_alt: "BusyRebar's wall-mounted RGB LED matrix displaying a BUSY Bar timer."
image_caption: "BusyRebar repeating the BUSY Bar display. Photo from the project blog post."
links:
  - label: "Read blog post"
    url: "/posts/busyrebar/"
  - label: "Source code"
    url: "https://github.com/izmalk/busyrebar"
gallery:
  - image: "/images/busy-power.jpg"
    alt: "A USB power meter connected to BusyRebar, showing voltage and current during operation."
    caption: "Measuring the panel's power consumption. Photo from the project blog post."
---

## Put the status where people can see it

I built BusyRebar to keep the BUSY Bar within reach on my desk while displaying a copy of its screen near the entrance to my home office. A Python bridge on a Linux host fetches the screen image, adapts it for a 64×32 RGB LED matrix, and sends the pixels over Wi-Fi to a Pimoroni Interstate 75 W controller.

The project combines a small hardware build with two scripts: one for image processing and brightness control, and one for receiving and displaying frames.

## Document the build and its trade-offs

The [BusyRebar blog post](/posts/busyrebar/) walks through the hardware, assembly, software configuration, brightness schedule, and background service setup. It also explains the design compromises: resizing a 72×16 image for a 64×32 panel, keeping the host awake, and retaining the last received frame when updates stop.

Read the [full build write-up](/posts/busyrebar/) for the practical details and photographs, or explore the [source code](https://github.com/izmalk/busyrebar).
