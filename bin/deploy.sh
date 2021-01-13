#!/usr/bin/env bash

set -e

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

npm run build
pushd dist || exit
  touch .nojekyll
  echo app.sagittal.org > CNAME
  git add .
  git commit -m "${NEW_VERSION}"
  git push
popd || exit
echo App deployed. Please commit.
