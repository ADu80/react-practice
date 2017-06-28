var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]', 'postcss-loader']
            })
        }, {
            test: /\.(jpg|png)/,
            use: 'url-loader?name=/images/[nmae].[ext]&limit=8196'
        }, {
            test: /\.(woff2?|ttf|eot|svg)/,
            use: 'url-loader?name=/iconfont/[name].[ext]&limit=8196'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new ExtractTextPlugin('css/styles.css'),
        new TransferWebpackPlugin([
            { from: 'services/static/css', to: '/css' },
            { from: 'services/static/js', to: '/js' }
        ], path.join(__dirname, 'src'))
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080
    }
}
