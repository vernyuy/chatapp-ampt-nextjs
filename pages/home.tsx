"use client";
import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "@components/Navbar";
import Person from "@components/Person";
import UserInbox from "@components/UserInbox";
import Image from "next/image";
import Button from "@components/Button";
import Link from "next/link";
import chat from "../public/Chat-bro.png";
const Home = () => {
  const { data: session } = useSession();
  const [people, setpeople] = useState([]);
  const [partnerId, setPartnerId] = useState("");
  const [partnerImage, setPartnerImage] = useState("");

  const [partnerName, setPartnerName] = useState("");
  const [inbox, setinbox] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  let test = [];
  const router = useRouter();
  useEffect(() => {
    posts();
    if (session?.user == null || !session.user) {
      router.replace("/");
    }

    user();
  }, []);
  console.log(userPosts);

  const user = async () => {
    const data = await fetch("http://localhost:3000/api/users/user");
    const p = await data.json();
    setpeople(p.items);
    p.items.map((p) => {
      if (p.value.email === session?.user.email) {
        setinbox(p.key);
      }
    });
    return p.items;
  };
  const posts = async () => {
    const data = await fetch(
      `http://localhost:3000/api/posts/user/${session?.user?.email}`
    );
    const p = await data.json();
    setUserPosts(p);
    return p;
  };

  return (
    <div className="h-screen font-display w-screen bg-black/95">
      <Navbar b_color="#fff" c_color="#43a047" />
      <div className="h-[90%] w-full flex justify-between py-3 px-5">
        <div className="bg-black text-white w-full max-w-[280px] rounded-md px-6 py-5 overflow-y-auto overflow-x-hidden">
          {/* Favourite */}
          <div>
            <p className="font-bold text-[18px] text-green-700">Favorites</p>
          </div>
          <div className="w-full flex overflow-x-auto scrollbar-hide gap-x-4 py-3">
            <div className="w-full max-w-fit">
              <div className="flex justify-center">
                <img
                  src="https://assets.aboutamazon.com/dims4/default/c10a70d/2147483647/strip/true/crop/2543x1430+0+0/resize/1320x742!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F66%2Fec%2F85b5b7d345aea64c048abf240903%2Fbuckets2.jpg"
                  className="rounded-full h-9 w-9 min-h-9 min-w-9"
                  width={9}
                  height={9}
                  alt="user"
                />
              </div>
              <p className="text-center text-[13px] text-gray-400">kongbi</p>
            </div>
          </div>

          {/* inbox nav */}
          {people.map((p) =>
            p.key === session?.user?.email ? (
              <div key={p.key}></div>
            ) : (
              <div
                key={p.key}
                onClick={() => {
                  setPartnerId(p.key);
                  setPartnerImage(p.value.image);
                  setPartnerName(p.value.name);
                }}
              >
                <Person
                  key={p.key}
                  name={p.value.name}
                  email={p.value.email}
                  image={p.value.image}
                />
              </div>
            )
          )}
          <button
            className="mt-[100%] text-green-500 text-[12px] border px-2 py-1 rounded-md border-gray-600 hover:bg-red-500 hover:text-white hover:border-none"
            onClick={() => signOut()}
          >
            sign Out
          </button>
        </div>

        {partnerId ? (
          <UserInbox
            partnerId={partnerId}
            inboxId={inbox}
            partnerImage={partnerImage}
            partnerName={partnerName}
          />
        ) : (
          <div className="h-[100%] bg-w-full flex">
            <Image src={chat} alt="chats" className="m-auto w-44 " />
          </div>
        )}

        <div className="bg-black text-white w-full max-w-[280px] rounded-md px-6 py-8 pt-10">
          <div className="w-full flex justify-center">
            <Image
              src={session?.user?.image}
              alt="user"
              height={60}
              width={60}
              className="rounded-full h-10 w-10 min-h-10 min-w-10 absolute -bottom-[10px]"
            />
          </div>
          <div className="text-center py-2">
            <h3 className="font-bold text-[15px]">{session?.user?.name}</h3>
            <h3 className="text-gray-400 text-[14px]">
              {session?.user?.email}
            </h3>
          </div>
          <div className="w-full flex mt-2">
            <div className="bg-green-300sd border-gray-800 border w-full flex justify-center items-center rounded-md mr-2.5 p-[6px] py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[21px] mr-1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <p className="font-medium text-[13.5px] text-green-600">Call</p>
            </div>
            <div className="bg-green-3re00 border-gray-800 border w-full flex justify-center items-center rounded-md p-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[22px] mr-1"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                />
              </svg>
              <p className="font-medium text-[13.5px] text-green-600">Video</p>
            </div>
          </div>
          <div className="w-full mt-5 border-t border-gray-800 pt-3">
            <div>
              <p className="font-bold text-[16px] text-[#43a047] ">MY BLOGS</p>
            </div>
            <div className="flex gap-[8px] flex-wrap pt-3">
              {userPosts ? (
                userPosts.map((post) => (
                  <div
                    key={post.key}
                    className="border border-gray-800 w-full h-fit mb-2 shadow-sm shadow-black text-[12px] rounded-md min-h-[50px] p-2"
                  >
                    <p className="font-semibold">{post.value.title}</p>
                  </div>
                ))
              ) : (
                <div key="nan">
                  <p>You have no blogs</p>
                  <Link href={"/posts"}>start blogging</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
