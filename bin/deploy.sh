set -e

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

rm -r dist/* > /dev/null 2>&1 || true
webpack --config webpack.app.config.js
pushd dist || exit
  git add .
  git commit -m "${NEW_VERSION}"
  git push
popd || exit
echo App deployed. Please commit.
