import withAmpt from "@ampt/nextjs";

const config = withAmpt({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ID:
      "570105531549-9a1teok79okq3d8gqhbjp1jfraol77q6.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/docs",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
});

export default config;
