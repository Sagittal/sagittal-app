const path = require("path")
const common = require("./webpack.common")

module.exports = {
    ...common,
    mode: "production",
    entry: "./src/staff/bbCode/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/forum/bbCode"),
        filename: "staff.js",
    },
}
