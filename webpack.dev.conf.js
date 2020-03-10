const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.conf");
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (p) => {
    return path.resolve(__dirname, p);
}

module.exports = merge(commonConfig, {
    entry: {
        main: resolve('./example/main')
    },

    mode: 'development',

    devServer: {
        contentBase: resolve('./dist'),
        port: 8090,
        host: '0.0.0.0',
        hot: true
    },

    devtool: '#cheap-module-source-map',

    plugins: [
        new htmlWebpackPlugin({
            template: resolve('./example/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
});
