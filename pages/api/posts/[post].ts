import { data } from "@ampt/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await data.get(`Post:${req.query.post}`).then((da) => {
        res.status(200).json(da);
      });
    case "UPDATE":
      if (req.body) {
        await data
          .add(`Post:${req.query.post}`, JSON.parse(req.body), {
            meta: true,
          })
          .then((result) => {
            res.status(200).json(result);
          });
        return;
      }
      return;
  }
}
