import Head from "next/head";
import { Login } from "@components/index";

export default function HomePage({ users }) {
  return (
    <div className="root">
      <Head>
        <title>Ampt</title>
      </Head>
      <main className="">
        <Login />
      </main>
    </div>
  );
}
