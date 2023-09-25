import Image from "next/image";
import React from "react";
import { messageProps } from "types";
const IncommingMessage = ({ content, partnerImage }: messageProps) => {
  console.log(partnerImage);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="profile-image">
          <Image
            src={partnerImage as string}
            alt="user"
            height={100}
            width={100}
            className="rounded-full"
          />
        </div>
        <div style={{ margin: "auto 10px" }}>{Date.now().toPrecision()}</div>
      </div>
      <div className="message-container incoming">
        <div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default IncommingMessage;

// import useSWR from "swr";

// const fetcher = (key) => fetch(key).then((res) => res.json());

// export default function HostSelector() {
//   const { incomming } = useSWR("/api/incomming", fetcher);

//   return (
//     <div>
//       {incomming?.users?.map(({ key, value }) => (
//         <p key={key}>{value.name}</p>
//       ))}
//     </div>
//   );
// }
