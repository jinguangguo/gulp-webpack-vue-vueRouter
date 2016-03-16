/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

export default {

    output: {
        filename: '[name].js'
    },

    module: {

        loaders: [
            {
                test: /\.(tpl|html)$/,
                loader: 'html'
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]

    }

    //// vue-loader config:
    //// lint all JavaScript inside *.vue files with ESLint
    //// make sure to adjust your .eslintrc
    //vue: {
    //    loaders: {
    //        js: 'babel!eslint'
    //    }
    //},
    //
    //babel: {
    //    presets: ['es2015'],
    //    plugins: ['transform-runtime']
    //}
    //
    //babel: {
    //    // enable stage 0 babel transforms.
    //    presets: ['es2015', 'stage-0'],
    //
    //    // babel-runtime is a package that contains a polyfill and many other things
    //    // that Babel can reference. You'd install it in your app with npm install babel-runtime
    //    // transform-runtime is a Babel plugin to process your source code and
    //    // inject import foo from "babel-runtime" statements so that babel-runtime is actually used.
    //    // You'd also install this with npm install babel-plugin-transform-runtime.
    //    plugins: ['transform-runtime']
    //}

}
