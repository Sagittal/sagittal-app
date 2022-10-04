#!/usr/bin/env bash

set -e

rm -r dist/* > /dev/null 2>&1 || true

make build-app
make build-ji-pitch
make build-notator
make build-xtras
