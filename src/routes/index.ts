import { Router } from "express";
import { getCurrentUser } from "../controllers/auth.js";

const router = Router();

router.get("/auth/me", getCurrentUser);

export default router;