import type { Request, Response } from "express";

export function uploadDocument(req: Request, res: Response): void {
    res.status(201).json({
        success: true,
        data: {},
        error: null,
    });
}

