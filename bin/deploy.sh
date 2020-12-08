rm -r dist/*
npm version patch
npm run build
CURRENT_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
pushd dist || exit
  git add .
  git commit -m "${CURRENT_VERSION}"
  git push
popd || exit
echo App deployed.
