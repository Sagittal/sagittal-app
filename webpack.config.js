const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const common = require("./webpack.common")

module.exports = {
    ...common,
    entry: "./src/staff/index.ts",
    output: {
        filename: 'main.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "staffCode renderer",
        }),
        new FaviconsWebpackPlugin('./assets/favicon.png'),
    ],
}
