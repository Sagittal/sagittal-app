const webpack = require("webpack")
const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "dist/sagittal.github.io",
    },
    plugins: [
        new webpack.WatchIgnorePlugin({paths: ["node_modules", "spec"]}),
    ],
}
