import { Router } from "express";
import { submitQuery } from "../controllers/query.js";

const queryRouter = Router();

queryRouter.post("/", submitQuery);

export { queryRouter };
