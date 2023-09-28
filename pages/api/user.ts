import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await data.getByLabel("label1", "User").then((da) => {
        console.log(da);
        res.status(200).json(da);
      });
      return;
    case "POST":
      if (req.body) {
        await data
          .set(JSON.parse(req.body).email, JSON.parse(req.body), {
            meta: true,
            overwrite: true,
            exists: false,
            label1: "User",
          })
          .then((result) => {
            res.status(200).json(result);
          });
        return;
      }
      return;
  }
}
