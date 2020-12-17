const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[contenthash].js",
    },
    resolve: {
        extensions: [".ts", ".scss", ".js"],
        alias: {
            buffer: "buffer",
        },
    },
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
        "path": "{}",
        "os": "{}",
        "util": "{}",
        "colors": "{}",
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
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(otf|woff)$/,
                loader: "url-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Sagittal Notator (one day; for now, just StaffCode renderer)",
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
}
