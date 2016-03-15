/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import gulp from 'gulp';
import gulpClean from 'gulp-clean';

gulp.task('clean', function() {
    return gulp.src('./output', {read: false})
        .pipe(gulpClean());
});