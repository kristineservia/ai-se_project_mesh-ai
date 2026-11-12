import { Router } from "express";
import { getChats } from "../controllers/chats.js";

const chatsRouter = Router();

chatsRouter.get("/", getChats);

export { chatsRouter };