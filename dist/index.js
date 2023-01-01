import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { bundleNativeModulesPlugin } from "@lumeweb/rollup-plugin-bundle-native-modules";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
export default function preset() {
    return defineConfig({
        plugins: [
            typescript(),
            json(),
            bundleNativeModulesPlugin(),
            nodeResolve({
                mainFields: ["main"],
                exportConditions: ["node", "require", "default"],
            }),
            commonjs(),
        ],
    });
}
