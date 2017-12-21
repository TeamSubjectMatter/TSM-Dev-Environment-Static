'use strict';

import gulp from 'gulp';

gulp.task('pdfs', () => {
  return gulp
    .src('src/assets/pdfs/**/*')
    .pipe(gulp.dest('public/assets/pdfs'));
});
