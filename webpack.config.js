const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: "[name].bundle.js",
        filename: "main.[contenthash].js",
    },
    resolve: {
        extensions: [".ts", ".scss", ".js", ".json"],
        alias: {
            buffer: "buffer",
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        module: "esnext",
                    },
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sagittal Notator (one day; for now, just StaffCode renderer)",
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
