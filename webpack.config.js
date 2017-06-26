var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
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
            use: ['style-loader', 'css-loader', 'postcss-loader']
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
