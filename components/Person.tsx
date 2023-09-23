import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Person = () => {
  const { data: session } = useSession();
  return (
    <div className="person-container">
      <div className="person-info">
        <div className="profile-image">
          <Image
            src={session?.user.image}
            alt="user"
            height={100}
            width={100}
          />
        </div>

        <div className="person-name">{session?.user.name}</div>
      </div>
    </div>
  );
};

export default Person;
