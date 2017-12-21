'use strict';

const fs = require('fs');
import gulp from 'gulp';
import gutil from 'gulp-util';
import data from 'gulp-data';
import plumber from 'gulp-plumber';
import tidy from 'gulp-htmltidy';
import template from 'gulp-template';
import layout from 'gulp-layout';

gulp.task('template', () => {
  return gulp
    .src('./src/*.html')
    .pipe(
      plumber(function(err) {
        gutil.beep();
        var errorText = err.message + '\n\n' + err.source;
        gutil.log(gutil.colors.red(errorText));
      }),
    )
    .pipe(
      data(() => {
        const partials = fs.readdirSync('./src/partials');
        const obj = {};
        partials.forEach(partial => {
          obj[partial.substring(0, partial.indexOf('.'))] = fs.readFileSync(
            `./src/partials/${partial}`,
          );
        });
        return obj;
      }),
    )
    .pipe(
      layout({
        layout: './src/layout/page.html',
        engine: 'ejs',
        data: {}
      }),
    )
    .pipe(template())
    .pipe(
      tidy({
        indent: true,
        dropEmptyElements: false
      }),
    )
    .pipe(gulp.dest(`public`));
});
