---
title: "{{ replace .Name "-" " " | title }}" # Title of the project.
date: {{ .Date }} # Date of project creation.
description: "Project description." # Description used for search engine.
featureImage: "/images/path/file.jpg" # Sets featured image on blog post.
featureImageAlt: 'Description of image' # Alternative text for featured image.
featureImageCap: 'This is the featured image.' # Caption (optional).
thumbnail: "/images/path/thumbnail.png" # Sets thumbnail image appearing inside card on homepage.
scale:
suppliers:      # List of suppliers
  - Example Supplier
  - Another Supplier
started:        # Date project started
completed:      # Date project was completed. Empty if the project is not yet complete
rulesets:       # List of relesets to be used
  - Ruleset 1
  - Ruleset 2
models:
- name: German Battalion HQ
  qty: 1
  sku: 
  supplier: Baccus 6mm
- name: German FOO
  qty: 1
  sku: 
  supplier: Baccus 6mm
tags:
  - Tag_name1
  - Tag_name2
draft: true
---

Project summary goes here

<!--more-->

More expansive description goes here...
