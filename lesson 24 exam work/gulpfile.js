let gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('default', () => {
	return del.sync('dist')
})

gulp.task('build', () => {
	let buildCss = gulp.src('css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("main.min.css"))
	.pipe(gulp.dest('dist/css'));

    let buildHtml = gulp.src('*.html')
    .pipe(gulp.dest('dist/'));


    let buildImages = gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));

    let buildImagesMasonry = gulp.src('img/masonry/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/masonry'));

    let buildImagesSlider = gulp.src('img/slider/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/slider'));


})