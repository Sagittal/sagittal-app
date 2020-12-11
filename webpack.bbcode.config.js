const path = require("path")

// TODO: okay this has now gotten similar enough that there should probably be a webpack common file

module.exports = {
    entry: "./src/staff/bbCode/index.ts",
    mode: "none",
    resolve: {
        extensions: [".ts", ".scss", ".js"],
    },
    // TODO: whoa okay including @sagittal/general made the generated .js way huger
    //  There must be a way to do tree-shaking or whatever to help with that
    //  I'm only pulling in "max" and "sumTexts"...
    //  And it went from 98KB to 755KB...
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
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
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(otf|woff)$/,
                loader: 'url-loader',
            },
        ],
    },
}
