import type { Request, Response } from "express";

export function getCurrentUser(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        data: {
            id: "user-1",
            email: "demo@meshai.com",
        },
        error: null,
    });
}