import eslint from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        // Plain JavaScript is not linted here, whichever extension it wears. The
        // typed rules below need every linted file to belong to a tsconfig, and
        // the .mjs under src/calculator/tools belongs to none of them — it is
        // node-run tooling, gated by the calculator job instead. eslint.config.mjs
        // used to be named here alone; **/*.mjs is the rule it was one case of.
        ignores: ["**/*.js", "**/*.mjs", "**/*.d.ts", "dist/*"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        plugins: { import: importPlugin, "unused-imports": unusedImportsPlugin },
        rules: {
            "no-control-regex": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-loss-of-precision": "off",
            "no-prototype-builtins": "off",
            "ban-ts-comment": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "unused-imports/no-unused-imports": "error",
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type",
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "never",
                },
            ],
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/typedef": [
                "error",
                {
                    variableDeclarationIgnoreFunction: true,
                    arrowParameter: false,
                    memberVariableDeclaration: false,
                    propertyDeclaration: false,
                    parameter: false,
                    arrayDestructuring: false,
                    objectDestructuring: false,
                    variableDeclaration: false,
                },
            ],
            // "no-warning-comments": [
            //     "warn",
            //     {
            //         terms: [" "],
            //         location: "anywhere",
            //     },
            // ],
        },
    },
)
