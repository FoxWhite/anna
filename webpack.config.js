var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/entry.js",
    output: {
        path:'./public',
        filename: "bundle.js",
        publicPath: "/public/",
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("production")
           }
        })
    ],
    devtool: 'source-map',
    resolve: {
        root: path.resolve()
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  plugins: [],
                  presets: ["latest"]
                }
            },
            {
                test: /\.sass$/,
                // Passing indentedSyntax query param to node-sass
                loader: ExtractTextPlugin.extract(
                  'style-loader',
                  'css-loader!sass-loader?indentedSyntax&sourceMap',
                  ''
                ),
            },
            {
                test: /\.(png)$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.(jpe?g)$/,
                loader: 'url-loader?limit=10000!img-loader?progressive=true'
            },
            {
                test: /\.(ico)$/,
                loader: 'url-loader?limit=10000&mimetype=image/x-icon'
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            { test: /\.(ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?name=fonts/[name].[ext]'},
        ]
    }
};