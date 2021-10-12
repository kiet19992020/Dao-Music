const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-cssnano');
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');

function style() {

    return gulp.src('./css/*.scss')
    .pipe(sass())

    .pipe(gulp.dest('./'))
    .pipe(minifyCss())

    .pipe(browserSync.stream());

}
function javscript() {
    return gulp.src('./javascript/*.js')

    .pipe(uglify())
    
    .pipe(gulp.dest('./'))

    .pipe(browserSync.stream());

}
// 
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./css/**/*.scss', style).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload); 
    // gulp.watch('./javascript/**/*.js').on('change',browserSync.reload);
}

exports.style = style;
exports.javscript = javscript;
exports.watch = watch;
