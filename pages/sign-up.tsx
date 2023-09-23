import { data } from "@ampt/data";
import Head from "next/head";
import Image from "next/image";
import { Button, Navbar, Login, Register } from "@components/index";
import DataViewer from "@components/DataViewer";
// import { useSession } from "next-auth/client";
import { SessionProvider } from "next-auth/react";

export default function RegisterPage() {
  // const [session] = useSession();
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
