const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const resolve = (p) => {
    return path.resolve(__dirname, p);
}

const isProd = process.env.NODE_ENV !== 'development';

module.exports = {
    output: {
        filename: '[name].js',
        path: resolve('./dist')
    },

    resolve: {
        extensions: ['.vue', '.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader', 'astroturf/loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: !isProd,
                        reloadAll: true
                    }
                }, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new vueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css'
        }),
        new ProgressBarPlugin()
    ]
};
