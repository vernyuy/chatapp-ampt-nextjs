import Image from "next/image";
import React from "react";
import { messageProps } from "types";
const IncommingMessage = ({ content, partnerImage, time }: messageProps) => {
  return (
    <div>
      <div className="w-full h-full max-w-[80%] my-2 flex justify-center">
        <div className="min-w-[44px] relative mr-1"></div>
      </div>

      <div className="w-fit h-full max-w-[80%] my-2 flex justify-center">
        <div className="min-w-[44px] relative mr-1">
          <img
            src={partnerImage as string}
            alt="user"
            className="rounded-full h-10 w-10 min-h-10 min-w-10 absolute -bottom-[10px]"
          />
        </div>
        <div>
          <div className="w-full bg-black text-gray-300 border border-green-400 px-4 py-3 rounded-t-lg rounded-e-lg">
            <p>{content}</p>
          </div>

          <div>
            <p className="text-[10px]">
              {time.split("T")[1].split(":")[0]}:{" "}
              {time.split("T")[1].split(":")[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncommingMessage;
