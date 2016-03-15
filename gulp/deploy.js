/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import gulp from 'gulp';
import sequence from 'gulp-sequence';

import './deploy/clean';
import './deploy/html';
import './deploy/js';

gulp.task('deploy:dev', sequence('clean', ['html:dev', 'js:dev']));

gulp.task('deploy:prod', sequence('clean', 'html:prod', 'js:prod'));