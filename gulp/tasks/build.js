'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], cb => {
  runSequence('styles', 'scripts', 'template', 'images', 'icons', 'pdfs', 'fonts', function() {
    cb();
  });
});
