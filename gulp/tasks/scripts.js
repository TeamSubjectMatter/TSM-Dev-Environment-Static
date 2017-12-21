'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import deporder from 'gulp-deporder';

gulp.task('scripts', () => {
	gulp
		.src('./src/assets/scripts/*.js')
		.pipe(deporder())
		.pipe(sourcemaps.init())
		//.pipe(
		//	babel({
		//		presets: ['env'],
		//	}),
		//)
		.pipe(concat('main.min.js'))
		.pipe(
			uglify().on('error', function(err) {
				console.log(err);
			}),
		)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./public/assets'));
});
