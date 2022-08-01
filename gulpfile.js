const gulp = require('gulp');
const minify = require('gulp-minify');
const concat = require ( 'gulp-concat' ) ;
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('min-js', function() {
    return gulp.src('src/js/script.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-css', function() {
    return gulp.src('dist/css/all.css')
        .pipe(cleanCSS())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', gulp.series('min-js'));
    gulp.watch('src/css/*.css', gulp.series('css','minify-css'));
    gulp.watch('src/img/*.*',gulp.series('images'));
    // Other watchers
});

gulp.task('images', function(){
    return gulp.src('src/img/*.+(png|jpg|gif|svg)')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', gulp.series('min-js', 'css','minify-css','images'));

