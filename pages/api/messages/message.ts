import { data } from "@ampt/data";

import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  switch (req.method) {
    case "GET":
      console.log(req.url);
      const receiver = JSON.parse(req.body).receiverId;
      await data
        .getByLabel("label1", "Message", { meta: true, reverse: true })
        .then((data) => {
          res.status(200).json(data);
        });
      return;
    case "POST":
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
