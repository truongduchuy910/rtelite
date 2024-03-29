import { defineConfig } from "tsup";

export default defineConfig({
  target: "ESNext",
  splitting: true,
  bundle: false,
  treeshake: false,
  dts: true,
  clean: true,
  entryPoints: ["src/*.{ts,tsx,css}", "src/**/*.{ts,tsx,css}"],
  format: ["cjs", "esm"],
});
