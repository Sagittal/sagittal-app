# sagittal-app

web apps for the Sagittal microtonal notation system

## development

After cloning, don't forget to `cd` into `dist` and `git checkout main`. There's probably a way I could do a recursive
submodule initiation, like I did on other big projects, but I'm too lazy.

`npm start` to build and run the dev server.

## deployment

`npm deploy` to build and push the latest code to production: `https://sagittal.github.io`,
or `https://app.sagittal.org`.

The `dist` folder is a submodule of a GitHub repo which corresponds to a GitHub page. So deploying works by compiling to
the `dist` folder like normal, but then just `cd`ing into the `dist` folder, committing, and pushing.

Each sub-app has its own `webpack` command or Bash script which builds an index into a corresponding subdirectory of
the `dist` directory, which in turn corresponds with a sub-app/page of the main site which you can access at that path.
