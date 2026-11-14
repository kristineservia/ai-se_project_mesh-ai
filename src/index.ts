import express from "express";
import router from "./routes/index.js";
import { logger } from "./middleware/logger.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(router);

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        data: { status: "ok" },
        error: null,
    });
});

app.get("/test-error", () => {
    throw new Error("Test error");
});

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`MeshAI server running on port ${PORT}`);
});