# sagittal-app

web apps for the Sagittal microtonal notation system

## development

`npm start` to build run the dev server.
`npm deploy` to build and push the latest code to production: `https://sagittal.github.io`.

Each sub-app has its own webpack or script which corresponds to a subdirectory of the `dist` directory, each of which
has an `index.html` file corresponding to a site you can visit.

The `dist` folder is a submodule of a GitHub repo which corresponds to a GitHub page. So deploying works by compiling to
the `dist` folder like normal, but then just `cd`ing into the `dist` folder, committing, and pushing.
