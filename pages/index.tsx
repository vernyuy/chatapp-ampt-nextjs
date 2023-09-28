import { data } from "@ampt/data";
import Head from "next/head";
import { Login, Post } from "@components/index";
// import { ws, SocketConnection } from "@ampt/sdk";
// import io from "Socket.IO-client";

export default function HomePage({ users }) {
  // console.log(messageHistory, ws);
  const realtimeMsg = async () => {
    const message = await fetch("http://localhost:3000/api/socket");
    //   // console.log(await message.json());
    //   const socket = io("wss://amazing-source-nsi46.ampt.app");
    //   socket.on("connect", () => {
    //     console.log("connected");
    //   });
    // ws.on("connected", async (connection: SocketConnection) => {
    //   console.log("connected");
    // });
  };

  // realtimeMsg();
  return (
    // <div>
    //   {/* <Header text={`WebSocket Status: ${connectionStatus}`} /> */}
    //   {/* {`WebSocket Status: ${connectionStatus}`}
    //   <h1 className="text-3xl font-bold">Welcome to Ampt WebSockets!</h1>
    //   <div style={{ height: "30px" }} />
    //   <div style={{ flex: 1, flexDirection: "column" }}>
    //     <button
    //       onClick={() => {
    //         console.log("Clicked");
    //         handleClickSendMessage();
    //       }}
    //     >
    //       test
    //     </button>
    //     <div style={{ height: "30px" }} />
    //     <h1 className="text-2xl font-bold underline">Received Messages</h1>
    //     {messageHistory.map((message, idx) => (
    //       <p key={idx} className="text-2xl ...">
    //         {message ? message.data : "null"}
    //       </p>
    //     ))}
    //   </div> */}
    //   {/* {`Connected to ${wsUrl}`} */}
    //   {/* <Header top={false} text={`Connected to ${wsUrl}`} /> */}
    // </div>
    <div className="root">
      <Head>
        <title>Ampt</title>
      </Head>
      <main>
        <Post />
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
