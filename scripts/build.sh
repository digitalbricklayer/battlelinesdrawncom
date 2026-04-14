#!/usr/bin/env bash
# Build the site to src/public directory
docker run --rm -it \
  -v $(pwd)/src:/src \
  -u $(id -u):$(id -g) \
  hugomods/hugo:0.121.1 \
  hugo --environment development
