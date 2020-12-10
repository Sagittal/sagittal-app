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
                    // TODO: I actually think it should strip comments now, and see how much it reduces the file size
                    //  Now that we're not planning to actually use the generated JS file to share with users
                    transpileOnly: true,
                },
            },
        ],
    },
}
