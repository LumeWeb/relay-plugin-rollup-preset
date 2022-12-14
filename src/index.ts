import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { bundleNativeModulesPlugin } from "@lumeweb/rollup-plugin-bundle-native-modules";

const preset = defineConfig({
  plugins: [nodeResolve(), commonjs(), bundleNativeModulesPlugin()],
});

export default preset;
