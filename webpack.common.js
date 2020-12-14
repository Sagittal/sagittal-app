// TODO: solve these issues:
/*
(node:13860) [DEP_WEBPACK_MAIN_TEMPLATE_GET_ASSET_PATH] DeprecationWarning: MainTemplate.getAssetPath is deprecated (use Compilation.getAssetPath instead)
(Use `node --trace-deprecation ...` to show where the warning was created)
i ｢atl｣: Using typescript@4.1.2 from typescript
i ｢atl｣: Using tsconfig.json from C:/Users/DouglasBlumeyer/workspace/Sagittal/sagittal-main/app/tsconfig.json
(node:13860) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
 */

module.exports = {
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
