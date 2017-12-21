'use strict';

import gulp from 'gulp';

gulp.task('fonts', () => {
  return gulp
    .src('src/assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));
});
