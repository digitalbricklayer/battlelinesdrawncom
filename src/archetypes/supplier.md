---
title: "{{ replace .Name "-" " " | title }}" # Title of the supplier.
date: {{ .Date }} # Date of supplier page creation.
description: "Supplier description." # Description used for search engine.
featureImage: "/images/path/file.jpg" # Sets featured image on blog post.
featureImageAlt: 'Description of image' # Alternative text for featured image.
featureImageCap: 'This is the featured image.' # Caption (optional).
thumbnail: "/images/path/thumbnail.png" # Sets thumbnail image appearing inside card on homepage.
scales:
website_url:
tags:
  - Tag_name1
  - Tag_name2
draft: true
---
