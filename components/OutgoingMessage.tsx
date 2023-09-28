import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { messageProps } from "types";

const OutgoingMessage = ({ content, time }: messageProps) => {
  const { data: session } = useSession();
  const [msgTime, setMsgTime] = useState("");

  useEffect(() => {
    setMsgTime(moment(time, "YYYYMMDD").fromNow());
  }, [moment]);
  return (
    <div className="">
      <div className="w-full h-full max-w-[80%] my-2 flex justify-center float-right">
        <div className="min-w-[44px] relative ml-2"></div>
      </div>
      <div className=" min-w-[150px] h-full max-w-[80%] my-2 flex justify-center float-right">
        <div>
          <div className="w-full bg-gray-100 px-4 py-3 rounded-t-lg rounded-e-lg">
            <p>{content}</p>
          </div>

          <div>
            <p className="text-[10px]">
              {time.split("T")[1].split(":")[0]}:{" "}
              {time.split("T")[1].split(":")[1]}
            </p>
          </div>
        </div>
        <div className="min-w-[44px] relative ml-2">
          {session ? (
            <img
              src={`${session?.user?.image}`}
              alt="user"
              className="rounded-full h-10 w-10 min-h-10 min-w-10 absolute -bottom-[10px]"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutgoingMessage;
