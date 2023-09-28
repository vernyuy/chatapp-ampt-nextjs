import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { personProps } from "types";
const Person = ({ name, email, image }: personProps) => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center py-1 my-2.5">
      <div className="w-full max-w-[47px]">
        <img
          src={image}
          alt="user"
          className="rounded-full h-11 w-11 min-h-11 min-w-11"
        />
        {/* <img
          src="https://assets.aboutamazon.com/dims4/default/c10a70d/2147483647/strip/true/crop/2543x1430+0+0/resize/1320x742!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F66%2Fec%2F85b5b7d345aea64c048abf240903%2Fbuckets2.jpg"
          className="rounded-full h-11 w-11 min-h-11 min-w-11"
        /> */}
      </div>
      <div className="w-full px-2">
        <div className="flex justify-between">
          <h3 className="font- font-semibold text-[15px] truncate">{name}</h3>
          <h3 className="text-gray-400 text-[12px]">1h ago</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[14px]">ok am waiting...</h3>
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
