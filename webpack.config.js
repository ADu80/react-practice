var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }, {
            test: /\.(eot(\?v=\d+\.\d+\.\d+)?)|((woff|woff2)(\?v=\d+\.\d+\.\d+)?)|(ttf(\?v=\d+\.\d+\.\d+)?)|(svg(\?v=\d+\.\d+\.\d+)?)$/,
            include: [path.join(__dirname, 'node_modules/bootstrap/dist')],
            use: 'url-loader?limit=1024&name=/css/bootstrap/[name].[ext]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 8080
    }
}
