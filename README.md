# sagittal-app

web apps for the Sagittal microtonal notation system

## current state

`npm start` to run the dev server.
`npm deploy` to push the latest code to production: `https://sagittal.github.io`.

The `dist` folder is a submodule of a GitHub repo which corresponds to a GitHub page. So deploying works by compiling to the dist folder like normal, but then just `cd`ing into the `dist` folder, commiting, and pushing.
