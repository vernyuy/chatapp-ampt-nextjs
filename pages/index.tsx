"use client";
import { data } from "@ampt/data";
import Head from "next/head";

import Image from "next/image";
import { Button, Navbar, Login } from "@components/index";
import DataViewer from "@components/DataViewer";

export default function HomePage({ users }) {
  return (
    <div className="root">
      <Head>
        <title>Ampt</title>
      </Head>
      <main>
        <Login />
        {/* <Button title="sign in" /> */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const result = (await data.get("user:*", true)) as any;
  return {
    props: {
      users: result.items.map(({ value }) => value),
    },
  };
}
