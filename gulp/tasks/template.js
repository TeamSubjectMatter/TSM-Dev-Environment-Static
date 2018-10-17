'use strict';

const fs = require('fs');
import gulp from 'gulp';
import gutil from 'gulp-util';
import data from 'gulp-data';
import plumber from 'gulp-plumber';
import tidy from 'gulp-htmltidy';
import template from 'gulp-template';
import layout from 'gulp-layout';


const partials = fs.readdirSync('./src/partials');
const obj = {};

var traverse = function(folder, foldername) {
  folder.forEach(subFile => {
    if(subFile.indexOf('.') == -1){
      var subFolder = fs.readdirSync(`./src/partials/${foldername}${subFile}`);
      var newfoldername = foldername + folder[folder.indexOf(subFile)].toString() + '/';
      traverse(subFolder,newfoldername);
    }else {
      obj[subFile.substring(0, subFile.indexOf('.'))] = fs.readFileSync(
        `./src/partials/${foldername}${subFile}`,
      );
    }
  });
}

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
        traverse(partials,'');
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
