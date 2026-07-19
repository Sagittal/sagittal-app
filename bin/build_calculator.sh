#!/usr/bin/env bash

set -e

# The calculator is a single self-contained page — its own build (a Python
# script under src/calculator/tools) inlines the data and the font subset — so
# there is nothing for webpack to do here but place the file.
mkdir -p dist/calculator
cp src/calculator/index.html dist/calculator/index.html
