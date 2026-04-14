#!/usr/bin/env bash
# Update hugo module theme dependencies
docker run --rm -it \
  -v $(pwd)/src:/src \
  -u $(id -u):$(id -g) \
  hugomods/hugo:0.121.1 \
  hugo mod get -u github.com/chipzoller/hugo-clarity
