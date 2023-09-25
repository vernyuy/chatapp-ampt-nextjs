import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { messageProps } from "types";

const OutgoingMessage = ({ content }: messageProps) => {
  const { data: session } = useSession();
  return (
    <div className="">
      <div className="user-inbox">
        <div style={{ margin: "auto 10px" }}>{Date.now().toPrecision()}</div>
        <div className="profile-image">
          {session ? (
            <Image
              src={`${session?.user?.image}`}
              alt="user"
              height={100}
              width={100}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="message-container outgoing">
        <div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessage;
