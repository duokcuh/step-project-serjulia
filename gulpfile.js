const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean');

const path = {
    dist: {
        html: 'dist',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img',
        self: 'dist'
    },
    src : {
        html: 'src/*.html',
        scss: 'src/scss/*.scss',
        js: 'src/js/*.js',
        img: 'src/img/*.*'
    }
};

/************ F U N C T I O N S **************/
const htmlBuild = () => (
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.stream())
);

const scssBuild = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['> 0.01%', 'last 100 versions']))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
);

const jsBuild = () => (
    gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())
);

const cleanDist = () => (
    gulp.src(path.dist.self, {allowEmpty: true})
        .pipe(clean())
);

/************ W A T C H E R **************/
const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch(path.src.html, htmlBuild).on('change', browserSync.reload);
    gulp.watch(path.src.scss, scssBuild).on('change', browserSync.reload);
    gulp.watch(path.src.js, jsBuild).on('change', browserSync.reload)
};

/************ T A S K S **************/
gulp.task('html', htmlBuild);
gulp.task('scss', scssBuild);
gulp.task('js', jsBuild);

gulp.task('default', gulp.series(
    cleanDist,
    gulp.parallel(htmlBuild, scssBuild, jsBuild),
    watcher
));