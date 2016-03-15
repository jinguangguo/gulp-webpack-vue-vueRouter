/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import gulp from 'gulp';
import gulpWebpack from 'gulp-webpack';
import gulpMd5 from 'gulp-md5-plus';

import webpackDevConfig from '../webpack.dev.config';
import webpackProdConfig from '../webpack.prod.config';

import webpackEntry from '../webpack.entry';

gulp.task('js:dev', function() {

    webpackDevConfig.entry = webpackEntry;

    return gulp.src('**/app/js/index.js')
        .pipe(gulpWebpack(webpackDevConfig))
        .pipe(gulp.dest('./output/js/'));

});

gulp.task('js:prod', function() {

    webpackProdConfig.entry = webpackEntry;

    return gulp.src('**/app/js/*.js')
        .pipe(gulpWebpack(webpackProdConfig))
        .pipe(gulpMd5(6, './output/*.html'))
        .pipe(gulp.dest('./output/js/'));

});