import { data } from "@ampt/data";
import { api } from "@ampt/api";
import { storage } from "@ampt/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const name = KSUID.randomSync().string;
      const posts = await storage("posts").getUploadUrl(`${name}.jpg`);
      const downloadUrl = await storage("posts").getDownloadUrl(`${name}.jpg`);
      res.status(200).json({ uploadUrl: posts, downloadUrl: downloadUrl });
      return;
  }
}
