import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { messageSentProps } from "types";
import { SocketConnection, ws } from "@ampt/sdk";

type ResponseData = {
  // messages: Map<string, string>;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  switch (req.method) {
    case "GET":
      console.log(req.url);
      //   const message = await data.get("message").then((da) => {
      //   });
      // const sender = req.;
      const receiver = JSON.parse(req.body).receiverId;
      await data.getByLabel("label1", "Message").then((data) => {
        res.status(200).json(data);
      });
      return;
    case "POST":
      // ws.on<messageSentProps>(
      //   "message",
      //   async (connection: SocketConnection, message: messageSentProps) => {
      //     const { connectionId } = connection;
      //     const existingConnection = await data.get(
      //       `connection:${connectionId}`
      //     );
      //     const { text, id, partnerId } = message;
      //     if (existingConnection) {
      //       await data.set(
      //         `current_location:${id}`,
      //         {
      //           text,
      //           partnerId,
      //         },
      //         { meta: false }
      //       );
      //     }
      //   }
      // );
      if (req.body) {
        const key = KSUID.randomSync().string;
        console.log("Message: ", req.body);
        await data
          .set(key, JSON.parse(req.body), {
            meta: true,
            overwrite: true,
            exists: false,
            label1: "Message",
          })
          .then((result) => {
            res.status(200).json(result);
          });
        return;
      }
      return;
  }
}
