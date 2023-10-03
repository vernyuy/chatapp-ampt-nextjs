import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = ({ b_color, c_color }) => {
  const { data: session } = useSession();
  return (
    <div className="bg-black text-white w-full flex justify-between items-center px-5 py-1">
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
          className="block py-2.5 px-4 w-[60%] border rounded-full border-gray-800 text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
          placeholder="Search here"
        />
      </div>
      <div className="w-full max-w-fit pl-5 bg-black">
        <div className="w-full max-w-fit flex items-center">
          <div
            className={`mr-12 text-[12px] hover:cursor-pointer hover:border-b-[1.5px] text-[${b_color}]  border-gray-600`}
          >
            <Link href={"/posts"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 32 32"
                color={b_color}
              >
                <path
                  fill="currentColor"
                  d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-6-8v6h6v-6z"
                ></path>
              </svg>
            </Link>
            Blogs
          </div>
          {session?.user && (
            <div
              className={`mr-12 text-[12px] hover:cursor-pointer hover:border-b-[1.5px] text-[${c_color}]  border-gray-600`}
            >
              <Link href={"/home"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 256 256"
                  color={c_color}
                >
                  <path
                    fill="currentColor"
                    d="M236.06 187.69A84 84 0 0 0 172.29 68.9a84 84 0 1 0-152.35 70.79l-7.24 25.36A18 18 0 0 0 35 187.3l25.36-7.24a84.27 84.27 0 0 0 23.36 7a84.05 84.05 0 0 0 112 41l25.36 7.24a18 18 0 0 0 22.25-22.25Zm-207.7-23.47Zm33.17-9a12 12 0 0 0-3.3.46l-19.49 5.57l5.57-19.49a12 12 0 0 0-1-9.05a60 60 0 1 1 24 24a11.91 11.91 0 0 0-5.78-1.48Zm150.16 34.54l5.57 19.49l-19.49-5.57a12 12 0 0 0-9.05 1A60.06 60.06 0 0 1 111 186.63a83.93 83.93 0 0 0 68.55-91.37a60 60 0 0 1 33.16 85.46a12 12 0 0 0-1.02 9.05Z"
                  ></path>
                </svg>
              </Link>
              <p className="">Chats</p>
            </div>
          )}

          {session?.user && (
            <div className="flex justify-center mr-[8px] bg-green-600 p-[2px] rounded-full">
              <Image
                src={session?.user.image}
                alt="user"
                height={33}
                width={33}
                className="rounded-full h-8 w-8 min-h-9 min-w-9"
              />
            </div>
          )}
          {session?.user && (
            <p className="text-center text-[14px] text-gray-600 font-bold">
              {session?.user.name.split(" ")[0]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
