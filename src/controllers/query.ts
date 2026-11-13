import type { Request, Response } from "express";

export function submitQuery(req: Request, res: Response): void {
    res.status(200).json({
        success: true,
        data: {},
        error: null,
    });
}
