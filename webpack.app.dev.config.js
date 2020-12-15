const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        watchContentBase: true,
        contentBase: "dist/sagittal.github.io",
    },
}
