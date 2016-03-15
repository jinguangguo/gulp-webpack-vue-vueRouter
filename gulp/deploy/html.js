/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

gulp.task('html:dev', function() {

    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./output/'));

});

gulp.task('html:prod', function() {

    return gulp.src('./app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./output/'));

});