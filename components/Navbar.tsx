import Image from "next/image";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  // const { image } = session?.user;
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="logo">
          <h3>ChatBoard</h3>
        </div>
        <div className="profile-image">
          {/* {session?.user.image} */}
          <div className="profile-image">
            <Image
              src={session?.user.image}
              alt="user"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
