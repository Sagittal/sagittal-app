module.exports = {
    // TODO: PERFORMANCE: is it the export without import in index.ts files that is preventing tree-shaking from being too effective?
    mode: "production",
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
                    compilerOptions: {
                        module: "esnext",
                    },
                    transpileOnly: true,
                },
                sideEffects: false,
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
