import { data } from "@ampt/data";

import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { messageData } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  switch (req.method) {
    case "GET":
      const message = JSON.parse(req.body);
      const sender = message.sender;
      const receiver = message.reciever;

      const messages = [];
      // const receiver = JSON.parse(req.body).receiverId;
      await data
        .get("MESSAGE:*", { meta: true, reverse: true })
        .then((data: messageData) => {
          data.items.map((message) => {
            if (
              (message.value.sender === sender &&
                message.value.reciever === receiver) ||
              (message.value.sender === receiver &&
                message.value.reciever === sender)
            ) {
              messages.push(message);
            }
          });
          // console.log(messages);

          messages.sort(function (a, b) {
            return a.created - b.created;
          });
          res.status(200).json(messages);
        });
      // .getByLabel("label1", "Message", { meta: true, reverse: true })
      // .then((data) => {
      //   res.status(200).json(data);
      // });
      return;
    case "POST":
      if (req.body) {
        const key = KSUID.randomSync().string;
        console.log("Message: ", req.body);
        await data
          .set(`MESSAGE:${key}`, JSON.parse(req.body), {
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
