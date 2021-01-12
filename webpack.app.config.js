const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const common = require("./webpack.common.config")

module.exports = {
    ...common,
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].bundle.js",
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sagittal",
            meta: {viewport: "width=device-width, initial-scale=1"},
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({process: "process/browser"}),
    ],
}
