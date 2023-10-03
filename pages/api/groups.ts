import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

type ResponseData = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const results = await data.remove(["POST:2W3vAnG6AEF7rTNCfTxi5PJLJK1"]);
      return;
    case "POST":
      if (req.body) {
        const key = KSUID.randomSync().string;
        await data
          .set(key, JSON.parse(req.body), {
            meta: true,
            overwrite: true,
            exists: false,
          })
          .then((result) => {
            res.status(200).json(result);
          });
        return;
      }
      return;
  }
}
