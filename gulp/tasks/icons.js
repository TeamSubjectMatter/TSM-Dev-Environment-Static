'use strict';

import gulp from 'gulp';

gulp.task('icons', () => {
  return gulp
    .src('src/assets/icons/**/*')
    .pipe(gulp.dest('public/assets/icons'));
});
