import { data } from "@ampt/data";

import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { messageData } from "types";
// type ResponseData = {
//   // messages: Map<string, string>;
//   message: string;
// };
// type msg = {
//   partnerId: String;
//   id: String;
//   text?: String;
//   image?: String;
// };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const sender = req.query.sender;
      const receiver = req.query.receiver;
      await data
        .get("MESSAGE:*", { meta: true, reverse: true })
        .then((data: messageData) => {
          const messages = [];
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
      // res.status(200).json(data);
      // });
      // .getByLabel("label1", "Message", {
      //   meta: true,
      //   reverse: true,
      //   limit: 100,
      // })
      // .then((data: messageData) => {
      //   const messages = [];
      //   data.items.map((message) => {
      //     if (
      //       (message.value.sender === sender &&
      //         message.value.reciever === receiver) ||
      //       (message.value.sender === receiver &&
      //         message.value.reciever === sender)
      //     ) {
      //       messages.push(message);
      //     }
      //   });
      //   console.log(messages);

      //   messages.sort(function (a, b) {
      //     return a.created - b.created;
      //   });
      //   res.status(200).json(messages);
      // });
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
