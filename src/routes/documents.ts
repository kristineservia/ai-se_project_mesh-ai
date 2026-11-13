import { Router } from "express";
import { uploadDocument, getDocuments } from "../controllers/documents.js";

const documentsRouter = Router();

documentsRouter.post("/", uploadDocument);
documentsRouter.get("/", getDocuments);

export { documentsRouter };

