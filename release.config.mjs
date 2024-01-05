/**
 * @type {import('semantic-release').GlobalConfig}
 */

export default {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/npm",
      {
        pkgRoot: "packages/rtelite",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["packages/rtelite/package.json"],
        message:
          "chore(release): ${nextRelease.version} 🚀\n\n${nextRelease.notes}",
      },
    ],
  ],
};
