const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const common = require("./webpack.common")

module.exports = {
    ...common,
    // TODO: we can't actually improve tree-shaking by switching @sagittal/general to esnext modules
    //  Because then it doesn't work in the node-based environments (importing into @sagittal/system and running tests)
    mode: "production",
    entry: "./src/staff/app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/sagittal.github.io"),
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "staffCode renderer",
        }),
        new FaviconsWebpackPlugin("./assets/favicon.png"),
    ],
}
