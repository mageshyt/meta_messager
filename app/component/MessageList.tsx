"use client";
import React, { useEffect, useState } from "react";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch("/api/getmessage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      setMessages(res);
    };
    getMessages();
  }, []);

  return (
    <div>
      {/* messages send by users */}
      {messages.map((msg: any, idx) => (
        <div>{msg.message}</div>
      ))}
    </div>
  );
};

export default MessageList;
