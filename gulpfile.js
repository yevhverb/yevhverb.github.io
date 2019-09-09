const gulp      = require('gulp'),
      concat    = require('gulp-concat'),
      terser    = require('gulp-terser'),
      cssnano   = require('gulp-cssnano'),
		concatCss = require('gulp-concat-css'),
		rename	 = require('gulp-rename'),
		clean     = require('gulp-clean');

gulp.task('concat-js', done => {
   gulp.src([
		'node_modules/popper.js/dist/umd/popper.min.js',
		'node_modules/tippy.js/umd/index.all.min.js'
	])
   .pipe(concat('libs.min.js'))
   .pipe(terser())
	.pipe(gulp.dest('src/js'));

	done();
});

gulp.task('concat-css', done => {
	gulp.src([
		'node_modules/tippy.js/themes/light.css'
	])
	.pipe(concatCss('libs.min.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('src/css'));

	done();
});

gulp.task('concat-all', gulp.series('concat-js', 'concat-css'), done => {
	done();
});

gulp.task('js-min', done => {
	gulp.src('src/js/main.js')
	.pipe(terser())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/js'));
	
	done();
});

gulp.task('css-min', done => {
	gulp.src('src/css/styles.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css'));

	done();
});

gulp.task('all-min', gulp.series('js-min', 'css-min'), done => {
	done();
}); 

gulp.task('clean', done => {
	gulp.src('docs/*', {read: false})
	.pipe(clean());

	done();
});

gulp.task('copy', done => {
	gulp.src('src/css/**/*')
	.pipe(gulp.dest('docs/css'));

	gulp.src('src/js/**/*')
	.pipe(gulp.dest('docs/js'));

	gulp.src(['src/*.html'])
	.pipe(gulp.dest('docs/'));

	gulp.src(['src/favicon.*'])
	.pipe(gulp.dest('docs/'));

	done();
});

gulp.task('build', gulp.series('clean', 'concat-all', 'all-min', 'copy'), done => {
	done();
});
