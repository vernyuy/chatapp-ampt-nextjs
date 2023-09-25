"use client";
import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "@components/Navbar";
import Person from "@components/Person";
import UserInbox from "@components/UserInbox";

const Home = () => {
  const { data: session } = useSession();
  const [people, setpeople] = useState([]);
  const [partnerId, setPartnerId] = useState("");
  const [partnerImage, setPartnerImage] = useState("");
  const [inbox, setinbox] = useState("");
  const [userId, setUserId] = useState("");
  let test = [];
  const router = useRouter();
  useEffect(() => {
    console.log(session?.user);
    if (session?.user == null || !session.user) {
      router.replace("/");
    }

    user();
  }, []);
  // console.log(text);

  // const websocket = new WebSocket("wss://your-app-url.ampt.app");
  // // websocket.
  // websocket.on("open", () => {
  //   console.log("Connected to Ampt WS");
  // });

  const user = async () => {
    const data = await fetch("http://localhost:3000/api/user");
    const p = await data.json();
    setpeople(p.items);
    p.items.map((p) => {
      if (p.value.email === session?.user.email) {
        setinbox(p.key);
      }
    });
    return p.items;
  };

  return (
    <div>
      <Navbar />
      <div className="chat-page">
        <div className="side-bar">
          {people.map((p) =>
            p.key === session?.user?.email ? (
              <div key={p.key}></div>
            ) : (
              <div
                key={p.key}
                onClick={() => {
                  setPartnerId(p.key);
                  setPartnerImage(p.value.image);
                }}
              >
                <Person
                  key={p.key}
                  name={p.value.name}
                  email={p.value.email}
                  image={p.value.image}
                  // id={p.key}
                />
              </div>
            )
          )}
          <button onClick={() => signOut()}>sign Out</button>
        </div>
        {partnerId ? (
          <UserInbox
            partnerId={partnerId}
            inboxId={inbox}
            partnerImage={partnerImage}
          />
        ) : (
          <div></div>
        )}
        <div className="info">Hello</div>
      </div>
    </div>
  );
};

export default Home;
