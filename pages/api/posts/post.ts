import { data } from "@ampt/data";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { messageData } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await data
        .get("POST:*", { meta: true, reverse: true })
        .then((resuslt: messageData) => {
          // resuslt.
          res.status(200).json(
            resuslt.items
              .sort(function (a, b) {
                return a.created - b.created;
              })
              .reverse()
          );
        });
    case "POST":
      const key = KSUID.randomSync().string;
      if (req.body) {
        await data
          .set(`POST:${key}`, JSON.parse(req.body), {
            meta: true,
            label1: "POST",
          })
          .then((result) => {
            res.status(200).json(result);
          });
        return;
      }
      return;
  }
}
