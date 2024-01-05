import { defineConfig } from "tsup";

export default defineConfig({
  target: "ESNext",
  splitting: true,
  dts: true,
  entryPoints: ["src/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
  format: ["cjs", "esm"],
});
