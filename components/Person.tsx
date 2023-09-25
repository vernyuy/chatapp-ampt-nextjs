import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { personProps } from "types";
const Person = ({ name, email, image }: personProps) => {
  const { data: session } = useSession();
  return (
    <div className="person-container">
      <div className="person-info">
        <div className="profile-image">
          <Image src={image} alt="user" height={100} width={100} />
        </div>

        <div className="person-name">
          {name} <br />
          {/* <span style={{ fontSize: "0.6rem" }}>{email}</span>  */}
        </div>
      </div>
    </div>
  );
};

export default Person;
