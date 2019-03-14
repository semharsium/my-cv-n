const merge = require('webpack-merge');
const options = require('./options');
const webpackConfig = require('@nitro/webpack/webpack-config/webpack.config.dev')(options);

module.exports = merge.smart(webpackConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(eot|woff|ttf|svg)$/,
                use: {
                    loader: require.resolve('url-loader'),
                    options: {
                        name: '[name].[ext]',
                    }
                }
            },
        ],
    },
});
