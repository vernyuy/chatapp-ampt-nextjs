// import { ws, SocketConnection } from "@ampt/sdk";
// import { data } from "@ampt/data";
// import WebSocket from "ws";
// type LatLong = {
//   lat: number;
//   long: number;
// };

// const websocket = new WebSocket(process.env.WEBSOCKET_URL);

// export default function handler(req, res) {
//   console.log("Incoming request");
//   websocket.on("connected", async (connection: SocketConnection) => {
//     const { connectionId, meta } = connection;
//     const { connectedAt, queryStringParams } = meta;
//     console.log("Hello");
//     await data.set(`connection:${connectionId}`, {
//       connectionId,
//       connectedAt,
//       username: queryStringParams?.name,
//     });
//   });

//   websocket.onopen = async (event) => {
//     // const {connectionId, meta} = event.type
//     // const {meta, queryStringParams} = meta
//     // await data.set(`connection:123}`, {
//     //   connectionId: "123",
//     //   connectedAt: new Date().toISOString(),
//     //   username: queryStringParams,
//     // });

//     console.log(event.type);
//   };

//   websocket.send(
//     JSON.stringify({
//       task: "start",
//     })
//   );

//   websocket.on("message", () => {
//     console.log("message");
//   });

//   websocket.onmessage = async (event) => {
//     console.log(event);
//   };

//   ws.on<LatLong>(
//     "message",
//     async (connection: SocketConnection, dataIfo: LatLong) => {
//       console.log("hello");
//       const { connectionId } = connection;
//       const existingConnection = await data.get(`connection:${connectionId}`);
//       const { lat, long } = dataIfo;
//       if (existingConnection) {
//         await data.set(`current_location:123`, {
//           lat,
//           long,
//         });
//       }
//     }
//   );
//   // ws.on("connected", (connection: SocketConnection) => {
//   //   console.log(`new connection: ${connection.connectionId}`);
//   // });

//   // ws.on("disconnected", (connection) => {
//   //   console.log(`connection closed: ${connection.connectionId}`);
//   // });

//   // ws.on("message", (data) => {
//   //   console.log(data);
//   // });

//   // websocket.onmessage = (event) => {
//   //   console.log(event);
//   // };
//   res.end();
// }

import { data } from "@ampt/data";
import { api } from "@ampt/api";
import { storage } from "@ampt/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      console.log(req.body);
      // const test = await storage("posts");
      const name = KSUID.randomSync().string;
      const posts = await storage("posts").getUploadUrl(`${name}.jpg`);
      const downloadUrl = await storage("posts").getDownloadUrl(`${name}.jpg`);
      console.log(downloadUrl);
      res.status(200).json({ uploadUrl: posts, downloadUrl: downloadUrl });
      return;
  }
}
