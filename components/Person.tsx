import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { personProps } from "types";
const Person = ({ name, email, image }: personProps) => {
  const { data: session } = useSession();
  return (
    <div className="bg-black flex items-center py-1 my-2.5 hover:cursor-pointer shadow-md bo-gray-200 border-b border-gray-800">
      <div className="w-full max-w-[47px]">
        <Image
          src={image}
          alt="user"
          height={40}
          width={40}
          className="rounded-full h-9 w-9 min-h-9 min-w-9"
        />
      </div>
      <div className="w-full px-1">
        <div className="flex justify-between">
          <h3 className="font- font-semibold text-[15px] truncate text-white">
            {name}
          </h3>
          <h3 className="text-gray-400 text-[12px]">1h ago</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[14px] text-gray-400">ok am waiting...</h3>
          <h3 className="bg-green-400 p-1 rounded-full font-medium text-[11px] shadow h-[18px] w-[18px] flex justify-center items-center text-white">
            4
          </h3>
        </div>
      </div>
    </div>
    // <div className="person-container">
    //   <div className="person-info">
    //     <div className="profile-image">
    //       <Image src={image} alt="user" height={100} width={100} />
    //     </div>

    //     <div className="person-name">
    //       {name} <br />
    //       {/* <span style={{ fontSize: "0.6rem" }}>{email}</span>  */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Person;
