#!/usr/bin/env bash

set -e

rm -r dist/* > /dev/null 2>&1 || true

npm run build-app
npm run build-ji-pitch
npm run build-notator
npm run build-xtras
