import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "570105531549-9a1teok79okq3d8gqhbjp1jfraol77q6.apps.googleusercontent.com",
      clientSecret: "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",
      httpOptions: {
        timeout: 6000,
      },
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
});
