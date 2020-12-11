const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")

module.exports = {
    entry: "./src/staff/index.ts",
    mode: "none",
    resolve: {
        extensions: [".ts", ".scss", ".js"],
    },
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
    },
    output: {
        filename: 'main.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.otf$/,
                loader: 'url-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "staffCode renderer",
        }),
        new FaviconsWebpackPlugin('./assets/favicon.png'),
    ],
}
