import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  // users: Map<string, string>;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  switch (req.method) {
    case "GET":
      const user = await data.get("user").then((da) => {
        // console.log("da");
      });
      // await data.set("foo", "bar", {
      //   meta: true,
      //   overwrite: true,
      //   ttl: 3600,
      //   label1: "baz",
      //   label2: "baz:bat",
      // });
      // console.log(req.body);
      const users = await data.getByLabel("label1", "User").then((da) => {
        console.log(da);
      });
      console.log(users);
    // res.status(200).json(users: users );
    // user;
    case "POST":
      if (req.body) {
        const key = req.body.email;
        console.log("User: ", req.body);
        await data
          .set(JSON.parse(req.body).email, JSON.parse(req.body), {
            meta: true,
            overwrite: true,
            exists: false,
            // ttl: 3600,
            label1: "User",
          })
          .then((da) => {
            console.log(da);
          });
      }
  }
  res.status(200).json({ message: "Hello from Next.js!" });
}
