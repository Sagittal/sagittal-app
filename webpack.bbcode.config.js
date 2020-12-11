const path = require("path")
const common = require("./webpack.common")

module.exports = {
    ...common,
    entry: "./src/staff/bbCode/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/forum/bbcode"),
        filename: "staff.js",
    },
}
