const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.conf");
const path = require('path');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const terserJsPlugin = require('terser-webpack-plugin');

const resolve = (p) => {
    return path.resolve(__dirname, p);
}

module.exports = merge(commonConfig, {
    entry: {
        'main': resolve('./src/main')
    },

    optimization: {
        minimizer: [
            new optimizeCssAssetsWebpackPlugin(),
            new terserJsPlugin()
        ]
    },
    
    mode: 'production'
});
