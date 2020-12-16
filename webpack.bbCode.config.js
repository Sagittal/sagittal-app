const path = require("path")
const common = require("./webpack.common")

module.exports = {
    ...common,
    entry: "./src/staff/bbCode/index.ts",
    output: {
        path: path.resolve(__dirname, "dist/forum/bbCode"),
        filename: "staffCode.js",
    },
    // TODO: TRY with webpack-merge or whatever
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
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
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
