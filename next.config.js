import withAmpt from "@ampt/nextjs";
import { params } from "@ampt/sdk";
process.env.WEBSOCKET_URL = params("wss://amazing-source-nsi46.ampt.app");
const config = withAmpt({
  reactStrictMode: true,
  env: {
    GOOGLE_ID:
      "570105531549-9a1teok79okq3d8gqhbjp1jfraol77q6.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    WEBSOCKET_URL: params("wss://amazing-source-nsi46.ampt.app"),
  },
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "en",
  //   localeDetection: false,
  // },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

export default config;
