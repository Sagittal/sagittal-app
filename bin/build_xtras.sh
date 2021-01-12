#!/usr/bin/env bash

set -e

mkdir dist/xtras
cp -R src/xtras* dist
mv dist/xtras/index.htm dist/xtras/index.html
