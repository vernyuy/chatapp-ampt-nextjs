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
      await data.get(`${req.query.userId}`).then((da) => {
        console.log(da);
        res.status(200).json(da);
      });
      return;
  }
}
