let gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    del = require('del');
    uglify = require('gulp-uglify');

gulp.task('default', () => {
	return del.sync('dist')
})

gulp.task('build', () => {
	let buildCss = gulp.src('app/css/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("main.min.css"))
	.pipe(gulp.dest('dist/css'));

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist/'));

    
    let buildScripts = gulp.src('app/js/*.js')
    .pipe(concat('min.js'))
    .pipe(gulp.dest('dist/js'));


    let buildImages = gulp.src('app/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));

    let buildImagesMasonry = gulp.src('app/img/masonry/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/masonry'));

    let buildImagesSlider = gulp.src('app/simg/slider/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/slider'));


})