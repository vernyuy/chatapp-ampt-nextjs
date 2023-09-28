import { data } from "@ampt/data";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";
import { postData } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await data.get("Post:*", { meta: true, reverse: true }).then((da) => {
        res.status(200).json(da);
      });
    case "POST":
      const key = KSUID.randomSync.toString();
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
