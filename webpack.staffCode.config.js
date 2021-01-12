const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const common = require("./webpack.common.config")

module.exports = {
    ...common,
    mode: "production",
    entry: "./src/staffCode/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/staffcode"),
        chunkFilename: "[name].bundle.js",
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "StaffCode",
            meta: {viewport: "width=device-width, initial-scale=1"},
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({process: "process/browser"}),
        new CopyWebpackPlugin({
            patterns: [
                {from: "node_modules/staff-code/dist/package/fonts", to: "assets/fonts"},
                {from: "node_modules/staff-code/dist/bbCode"},
            ],
        }),
    ],
}
