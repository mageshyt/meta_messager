"use client";
import { v4 as uuid } from "uuid";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetchMessages";

export type NewMessageType = {
  id: string;
  message: string;
  created_at: any;
  username: string;
  userImage: string;
};

const ChatInput = () => {
  const [messageText, setMessage] = useState<string>("");
  // const { data: messages, error, mutate } = useSWR("/api/getmessage", fetcher);
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("sending message", messages);

    const id = uuid();
    const newMessage: NewMessageType = {
      id,
      message: messageText,
      created_at: Date.now(),
      username: "Magesh yt",
      userImage: "https://avatars.githubusercontent.com/u/70838644?v=4",
    };
    const uploadMessage = async () => {
      const data = await fetch("/api/addmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newMessage,
        }),
      }).then((res) => res.json());
      console.log("data", data);
    };

    // await mutate(uploadMessage);
    uploadMessage();
    setMessage("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="flex fixed bottom-0  px-10 w-full  py-5"
    >
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message ..."
        className="flex-1 border h-full outline-none
        focus:ring-2 focus:ring-blue-400
         bg-transparent p-2 rounded-sm py-2 px-5"
      />
      {/* disable btn when user is not loggined */}
      <button
        type="submit"
        disabled={!messageText}
        className=" mx-4 bg-blue-400
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-blue-500 transform transition-all duration-150 
       px-4 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
