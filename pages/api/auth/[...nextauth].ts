import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
// import log from "logging-service";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      // "570105531549-9a1teok79okq3d8gqhbjp1jfraol77q6.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_SECRET, //"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",
      httpOptions: {
        timeout: 6000,
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: "/",
  // },
  // logger: {
  //   error(code, metadata) {
  //     log.error(code, metadata);
  //   },
  //   warn(code) {
  //     log.warn(code);
  //   },
  //   debug(code, metadata) {
  //     log.debug(code, metadata);
  //   },
  // },
});
