import { Router } from "express";
import { uploadDocument, getDocuments, getDocumentById } from "../controllers/documents.js";

const documentsRouter = Router();

documentsRouter.post("/", uploadDocument);
documentsRouter.get("/", getDocuments);
documentsRouter.get("/:id", getDocumentById);

export { documentsRouter };

