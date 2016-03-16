/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import gulp from 'gulp';
import Hapi from 'hapi';
import Inert from 'inert';
import through2 from 'through2';
import ip from 'ip';
import gulpSass from 'gulp-sass';
import gulpWebpack from 'gulp-webpack';
import gulpAutoprefixer from 'gulp-autoprefixer';

import webpackDevConfig from './webpack.dev.config';

gulp.task('server:start',  function() {

    let server = new Hapi.Server();

    server.register(Inert, function() {});

    server.connection({
        host: '0.0.0.0',
        port: 9001
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: function(request, reply) {

            let fileInfo = getFileInfo(request.path);

            console.log('filePath ====== ' + fileInfo.filePath);

            switch(fileInfo.fileType) {

                case 'html':

                    reply.file(fileInfo.filePath);
                    break;

                case 'css':
                case 'scss':

                    gulp.src(fileInfo.filePath.replace('.css','.scss'))
                        .pipe(gulpSass())
                        .pipe(gulpAutoprefixer({
                            browserlist: ['Android', 'iOS']
                        }))
                        .pipe(
                            through2.obj(
                                function (file) {
                                    reply(file.contents.toString()).type('text/css')
                                }
                            )
                        );
                    break;

                case 'js':

                    let newOption = Object.assign(webpackDevConfig, {
                        entry: {
                            [fileInfo.fileName]: fileInfo.filePath
                        }
                    });

                    //console.log('newOption.devtool: ' + newOption.devtool);
                    //console.log('newOption:' + JSON.stringify(newOption));

                    gulp.src(fileInfo.filePath)
                        .pipe(gulpWebpack(newOption))
                        .pipe(through2.obj(
                            function (chunk, enc, callback) {
                                reply(chunk.contents.toString());
                            }
                        ));

                    break;

                default :
                    reply.file(fileInfo.filePath);

            }
        }
    });

    function getFileInfo(requestPath) {

        let filePath = '.' + requestPath;
        let lastIndex = filePath.lastIndexOf('.');
        let directoryPath = filePath.substring(0, lastIndex);
        let fileType = filePath.substring(lastIndex + 1);
        let fileName = filePath.substring(filePath.lastIndexOf('/') + 1, lastIndex);

        return {
            directoryPath: directoryPath,
            filePath: filePath,
            fileType: fileType,
            fileName: fileName
        };

    }

    server.start(function () {
        console.log(`Server Started at ${server.info.protocol}:\/\/${ip.address()}:${server.info.port}`);
    });

});
