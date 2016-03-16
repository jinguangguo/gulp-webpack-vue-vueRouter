/**
 * @file
 * @author jinguangguo
 * @date 2016/3/15
 */

import config from './webpack.base.config';

config.devtool = '#inline-source-map';

config.devServer = {
    noInfo: true,
    lazy: true
};

export default config;
