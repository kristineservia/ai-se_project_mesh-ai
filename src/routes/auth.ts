import { Router } from "express";
import { getCurrentUser, registerUser } from "../controllers/auth.js";

const authRouter = Router();

authRouter.get("/me", getCurrentUser);
authRouter.post("/register", registerUser);

export { authRouter };