import { Router } from "express";
import { getChats, createChat, getChatById, deleteChat } from "../controllers/chats.js";

const chatsRouter = Router();

chatsRouter.get("/", getChats);
chatsRouter.post("/", createChat);
chatsRouter.get("/:id", getChatById);
chatsRouter.delete("/:id", deleteChat);

export { chatsRouter };
