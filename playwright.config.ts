import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:4323";

export default defineConfig({
  testDir: "./tests/e2e",
  webServer: {
    command: "pnpm dev --host 127.0.0.1 --port 4323",
    url: `${baseURL}/ub-moji/`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  use: {
    baseURL,
  },
});
