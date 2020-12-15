module.exports = {
    // TODO: PERFORMANCE: We can't actually improve tree-shaking by switching @sagittal/general to esnext modules
    //  Because then it doesn't work in the node-based environments (importing into @sagittal/system and running tests)
    //  If we actually wanted to reduce the impact of including @sagittal/general on this code
    //  We'd have to look into @sagittal/general as a library having two different compiled results, one for Node and
    //  One for the browser. I think.
    mode: "production",
    resolve: {
        extensions: [".ts", ".scss", ".js"],
        alias: {
            buffer: "buffer",
        },
    },
    externals: {
        "fs": "{}",
        "jasmine-spec-reporter": "{}",
        "child_process": "{}",
        "perf_hooks": "{}",
        "path": "{}",
        "os": "{}",
        "util": "{}",
        "colors": "{}",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                options: {
                    compilerOptions: {
                        module: "esnext",
                    },
                    transpileOnly: true,
                    isolatedModules: true,
                },
                sideEffects: false,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(otf|woff)$/,
                loader: "url-loader",
            },
        ],
    },
}
