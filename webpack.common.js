module.exports = {
    // TODO: whoa okay including @sagittal/general made the generated .js way huger
    //  There must be a way to do tree-shaking or whatever to help with that
    //  I'm only pulling in "max" and "sumTexts"...
    //  And it went from 98KB to 755KB...
    //  Now of course it's even bigger now that it also includes the fonts
    mode: "none",
    resolve: {
        extensions: [".ts", ".scss", ".js"],
    },
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
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
