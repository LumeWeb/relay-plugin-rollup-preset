import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve, } from "@rollup/plugin-node-resolve";
import { bundleNativeModulesPlugin } from "@lumeweb/rollup-plugin-bundle-native-modules";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
// @ts-ignore
import merger from "object-merger";
export default function preset(globalOptions, resolveOptions = {}, commonJsOptions = {}) {
    return merger(globalOptions, defineConfig({
        plugins: [
            typescript(),
            json(),
            bundleNativeModulesPlugin(),
            nodeResolve({
                mainFields: ["main"],
                exportConditions: ["node", "require", "default"],
                ...resolveOptions,
            }),
            commonjs(commonJsOptions),
        ],
    }));
}
