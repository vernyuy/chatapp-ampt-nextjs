import Image from "next/image";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  // const { image } = session?.user;
  return (
    <div className="bg-white w-full flex justify-between items-center px-5 py-1">
      <div className="h-[55px] w-full flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 mr-1"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
          />
        </svg>
        <input
          type="text"
          name="text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
          placeholder="Search here"
        />
      </div>
      <div className="w-full max-w-fit pl-5 bg-white">
        <div className="w-full max-w-fit flex items-center">
          <p>Posts</p>
          <div className="flex justify-center mr-[8px]">
            <Image
              src={session?.user.image}
              alt="user"
              height={40}
              width={40}
              className="rounded-full h-8 w-8 min-h-9 min-w-9"
            />
          </div>
          <p className="text-center text-[14px] text-gray-600 font-bold">
            {session?.user.name.split(" ")[0]}
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Navbar;
