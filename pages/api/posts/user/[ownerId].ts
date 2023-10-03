import { data } from "@ampt/data";
import type { NextApiRequest, NextApiResponse } from "next";
import { postData } from "types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const userPosts = [];
      await data.get(`POST:*`).then((data) => {
        data.items.filter((item: any) => {
          item.value.owner === req.query.ownerId && userPosts.push(item);
        });
        res.status(200).json(userPosts);
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
