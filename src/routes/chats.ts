import { Router } from "express";
import { getChats, createChat, getChatById } from "../controllers/chats.js";

const chatsRouter = Router();

chatsRouter.get("/", getChats);
chatsRouter.post("/", createChat);
chatsRouter.get("/:id", getChatById);

export { chatsRouter };
