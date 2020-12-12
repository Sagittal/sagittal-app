set -e

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

# deploy to forum

node bin/checkExisting.js
rm -r dist/forum/bbCode/*
webpack --config webpack.bbCode.config.js
node bin/uploadNew.js
cp src/staff/bbCode/acp/* dist/forum/bbCode # these don't actually get deployed, but grouped for convenient reference

# deploy app

rm -r dist/sagittal.github.io/*
webpack --config webpack.app.config.js
pushd dist/sagittal.github.io || exit
  git add .
  git commit -m "${NEW_VERSION}"
  git push
popd || exit
echo App deployed. Please commit.
