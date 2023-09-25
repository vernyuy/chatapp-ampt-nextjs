import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { messageData, messageSentProps } from "types";
import { SocketConnection, ws } from "@ampt/sdk";
type ResponseData = {
  // messages: Map<string, string>;
  message: string;
};
type msg = {
  partnerId: String;
  id: String;
  text?: String;
  image?: String;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      // console.log(req.url);
      //   const message = await data.get("message").then((da) => {
      //   });
      const sender = req.query.sender;
      const receiver = req.query.receiver;
      await data.getByLabel("label1", "Message").then((data: messageData) => {
        // console.log(data);
        const messages = [];
        data.items.map((message) => {
          if (
            (message.value.sender === sender &&
              message.value.reciever === receiver) ||
            (message.value.sender === receiver &&
              message.value.reciever === sender)
          ) {
            messages.push(message.value);
          }
        });
        console.log(messages);
        res.status(200).json(messages);
      });
      return;
    case "POST":
      if (req.body) {
        const key = KSUID.randomSync().string;
        console.log("Message: ", req.body);
        await data
          .set(key, JSON.parse(req.body), {
            meta: false,
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
