import React, { useEffect, useState, useCallback, useRef } from "react";
import IncommingMessage from "./IncommingMessage";
import OutgoingMessage from "./OutgoingMessage";
import InputEmojiWithRef from "react-input-emoji";
import { userInboxProps, messageSentProps } from "types";
import Image from "next/image";
import useWebSocket, { ReadyState } from "react-use-websocket";
import useSWR from "swr";

const UserInbox = ({
  partnerId,
  inboxId,
  partnerImage,
  partnerName,
}: userInboxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data } = useSWR(
    `http://localhost:3000/api/messages/${inboxId}/${partnerId}`,
    fetcher,
    {
      refreshInterval: 10,
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (data?.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [partnerId, messages.length, data && data.length]);
  const sendMessage = async (msgBody) => {
    const res = await fetch("http://localhost:3000/api/messages/message", {
      method: "POST",
      body: JSON.stringify({
        reciever: partnerId,
        sender: inboxId,
        text: msgBody,
        image: "image",
      }),
    });
  };

  return (
    <div className="bg-black/50 w-full mx-5 overflow-y-auto overflow-x-hidden rounded-md">
      <div className="w-full z-[105] bg-black sticky top-0 flex justify-center items-center border-b-[4px] border-gray-600 h-[60px] rounded-t-md px-4 py-8">
        <div className="w-full flex items-center justify-between">
          <div className="w-full max-w-fit bg-black">
            <div className="w-full max-w-fit flex items-center">
              <div className="flex justify-center mr-[8px]">
                <img
                  src={partnerImage as string}
                  alt="user"
                  height={40}
                  width={40}
                  className="rounded-full h-9 w-9 min-h-9 min-w-9"
                />
              </div>
              <div>
                <p className="text-[14px] text-white font-bold">
                  {partnerName.split(" ")[0]}
                </p>
                <p className="text-[13px] text-green-600">Active Now</p>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 w-full">
        {data &&
          data.map((message) =>
            message.value.sender === inboxId ? (
              <OutgoingMessage
                key={message.key}
                content={message.value.text}
                time={message.created}
              />
            ) : (
              <IncommingMessage
                key={message.key}
                content={message.value.text}
                time={message.created}
                partnerImage={partnerImage}
              />
            )
          )}
      </div>

      <div className="sticky bottom-0 w-full flex items-center bg-black mt-3 px-4">
        <div
          style={{ display: "flex" }}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-black appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
        >
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(text);
              setText("");
            }}
          >
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Type a message"
              className="h-9 rounded-full w-full px-3 text-gray-800"
            />
          </form>
        </div>
        <button
          className="max-w-fit pl-5"
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(text);
          }}
          // onClick={(e) => {
          //   e.preventDefault();
          //   sendMessage(text);
          // }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 hover:cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path fill="#888888" d="M2.01 21L23 12L2.01 3L2 10l15 2l-15 2z" />
          </svg>
        </button>
      </div>
      <div ref={ref} />
    </div>
  );
};

export default UserInbox;
