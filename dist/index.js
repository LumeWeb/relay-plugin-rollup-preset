import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { bundleNativeModulesPlugin } from "@lumeweb/rollup-plugin-bundle-native-modules";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
const preset = defineConfig({
    plugins: [
        typescript(),
        json(),
        nodeResolve(),
        commonjs(),
        bundleNativeModulesPlugin(),
    ],
});
export default preset;
