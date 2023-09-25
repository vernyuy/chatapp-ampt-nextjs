// import { data } from "@ampt/data";
// import { api } from "@ampt/api";
// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   // users: Map<string, string>;
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   switch (req.method) {
//     case "GET":
//       const user = await data.get("user").then((result) => {
//         res.status(200).json(result);
//       });
//       await data.getByLabel("label1", "User").then((result) => {
//         console.log("User: ", result);
//         res.status(200).json(result);
//       });
//     case "POST":
//       if (req.body) {
//         console.log("User: ", req.body);
//         await data
//           .set(JSON.parse(req.body).email, JSON.parse(req.body), {
//             meta: true,
//             overwrite: true,
//             exists: false,
//             label1: "User",
//           })
//           .then((result) => {
//             res.status(200).json(result);
//           });
//       }
//   }
// }

import { data } from "@ampt/data";
import { api } from "@ampt/api";
import type { NextApiRequest, NextApiResponse } from "next";
import KSUID from "ksuid";

type ResponseData = {
  // messages: Map<string, string>;
  message: string;
};

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
        // const key = KSUID.randomSync().string;
        // console.log("Message: ", req.body);
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
