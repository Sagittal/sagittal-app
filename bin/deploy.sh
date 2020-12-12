set -e

# deploy to forum

node bin/checkExisting.js
webpack --config webpack.bbCode.config.js
node bin/uploadNew.js

cp src/staff/bbCode/acp/* dist/forum/bbCode # these don't actually get deployed, but grouped for convenient reference

# deploy app

npm version patch
npm run build
CURRENT_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
pushd dist/sagittal.github.io || exit
  git add .
  git commit -m "${CURRENT_VERSION}"
  git push
popd || exit
echo App deployed. Please commit.
