import { client } from "../../redis";
import { Redis } from "ioredis";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NewMessageType } from "../../app/component/ChatInput";

type Data = {
  messages: NewMessageType;
};
type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method === "POST") {
    const { newMessage } = req.body;

    await client.hset("messages", newMessage.id, JSON.stringify(newMessage));

    return res.status(200).json({ messages: newMessage });
  }
  res.status(400).json({ body: "Bad Request" });
}
