import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
// import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import Navbar from "@components/Navbar";
import Person from "@components/Person";
import IncommingMessage from "@components/IncommingMessage";
import OutgoingMessage from "@components/OutgoingMessage";
import InputEmoji from "react-input-emoji";

const Home = () => {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const router = useRouter();
  useEffect(() => {
    console.log(session?.user);
    if (session?.user == null || !session.user) {
      router.push("/");
    }
  });
  console.log(text);
  return (
    <div>
      <Navbar />
      <div className="chat-page">
        <div className="side-bar">
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <button onClick={() => signOut()}>sign Out</button>
        </div>
        <div className="inbox">
          <IncommingMessage />
          <OutgoingMessage />
          <IncommingMessage />
          <OutgoingMessage />
          <IncommingMessage />
          <OutgoingMessage />
          <IncommingMessage />
          <OutgoingMessage />
          <IncommingMessage />
          <OutgoingMessage />
          <div className="typing-board">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(text);
              }}
            >
              <div style={{ display: "flex" }}>
                <InputEmoji
                  value={text}
                  onChange={setText}
                  //   cleanOnEnter
                  placeholder="Type a message"
                />
                <button>send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
