const app = require("./webpack.app.config")

module.exports = {
    ...app,
    mode: "development",
    devServer: {
        // TODO: what's the difference between `hot: true` and `liveReload: true`?
        //  I was told to remove `hot: true` to solve the problem of node_modules changes triggering recompile,
        //  But not reflecting in the recompiled bundle
        //  (Although actually in the others' case, it wasn't specifically their node_modules, but just any changes)
        liveReload: true,
    },
}
