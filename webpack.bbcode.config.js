const path = require("path")

module.exports = {
    entry: "./src/staff/bbCode/index.ts",
    mode: "none",
    resolve: {
        extensions: [".ts"],
    },
    output: {
        path: path.resolve(__dirname, "forum/bbcode"),
        filename: "staff.js",
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
        ],
    },
}
