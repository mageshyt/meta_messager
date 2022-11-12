import { client } from "../../redis";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NewMessageType } from "../../app/component/ChatInput";

type Data = {
  message: NewMessageType[];
};
type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "GET") {
    res.status(400).json({ body: "Bad Request" });
    return;
  }

  const messages = await client.hvals("messages");
  console.log("message ", messages);
  const messagesArray = Object.values(messages)
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.created_at - a.created_at);

  res.status(200).json({ message: messagesArray });
  return;
}
