const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: [
        "./assets/ts/index.ts"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "assets/js/bundle.js",
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    "ts-loader"
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    outputPath: "assets/fonts"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            "template": path.resolve(__dirname, "src/index.html"),
            "inject": "body"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}