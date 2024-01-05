import { defineConfig } from "tsup";

export default defineConfig({
  target: "ESNext",
  splitting: true,
  bundle: false,
  treeshake: false,
  dts: true,
  clean: true,
  entryPoints: ["src/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
  format: ["cjs", "esm"],
});
