const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const common = require("./webpack.common")

module.exports = {
    ...common,
    entry: "./src/staff/app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/sagittal.github.io"),
        filename: 'main.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "staffCode renderer",
        }),
        new FaviconsWebpackPlugin('./assets/favicon.png'),
    ],
}
