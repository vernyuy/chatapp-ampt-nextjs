import React, { useEffect, useState } from "react";
import IncommingMessage from "./IncommingMessage";
import OutgoingMessage from "./OutgoingMessage";
import InputEmojiWithRef from "react-input-emoji";
import { userInboxProps, messageSentProps } from "types";

const UserInbox = ({ partnerId, inboxId, partnerImage }: userInboxProps) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(partnerImage);
  useEffect(() => {
    getMessages();
  }, [partnerId]);

  const sendMessage = async () => {
    await fetch("http://localhost:3000/api/message", {
      method: "POST",
      body: JSON.stringify({
        reciever: partnerId,
        sender: inboxId,
        text: text,
        image: "image",
      }),
    });
  };

  const getMessages = async () => {
    const response = await fetch(
      `http://localhost:3000/api/messages/${inboxId}/${partnerId}`,
      {}
    );
    const data = await response.json();
    console.log(data);
    setMessages(data);
    return data;
  };
  //   getMessages();
  return (
    <div className="inbox">
      {messages.map((message) =>
        message.sender === inboxId ? (
          <OutgoingMessage key={message.text} content={message.text} />
        ) : (
          <IncommingMessage
            key={message.text}
            content={message.text}
            partnerImage={partnerImage}
          />
        )
      )}
      <div className="typing-board">
        <form
          onSubmit={(e) => {
            // e.preventDefault();
            sendMessage();
            // console.log(text);
          }}
        >
          <div style={{ display: "flex" }}>
            <InputEmojiWithRef
              value={text}
              onChange={setText}
              //   cleanOnEnter
              placeholder="Type a message"
            />
            {/* <button onClick={() => }>send</button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInbox;
