import Head from "next/head";
import { Register } from "@components/index";

export default function RegisterPage() {
  return (
    <div className="root">
      <Head>
        <title>sign-up</title>
      </Head>
      <main>
        <Register />
        {/* <Button title="sign in" /> */}
      </main>
    </div>
  );
}
