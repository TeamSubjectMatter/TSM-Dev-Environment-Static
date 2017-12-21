# Workflow

Please follow git flow. That means, all features and additions should be made on a custom branch and merged in to the develop branch. When you push to the origin develop branch, that will automatically trigger a deployment to the staging site.

All your HTML should go in the root level of the `./src` directory. An HTML file in this folder will build in to a new page. Break up the page in to partials and place them in the partials directory. Each page of html just needs all of the contents of the `<body>` element.

We're using SCSS for this project and all your partials should go in `./src/assets/styles`. The structure of our HTML loosely follows that of the underscores WordPress theme. We're building these sites mobile-first, so review the breakpoints in the `variables/` directory and how to use them to get started. You can see what your SCSS files should look like by looking at the `templates/style.scss` file.

The scripts gulp task will take all the JS files you put into the `./src/assets/scripts` directory, transpile them to ES5, minify them and concatenate them into a single minified JavaScript file in the `./public/assets` directory. It will also generate a sourcemap.
