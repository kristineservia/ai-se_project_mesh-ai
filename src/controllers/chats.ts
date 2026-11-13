import type { Request, Response } from "express";

export function getChats(req: Request, res: Response): void {
    res.status(200).json({
        success: true,
        data: {},
        error: null,
    });
}

export function createChat(req: Request, res: Response): void {
    res.status(201).json({
        success: true,
        data: {},
        error: null,
    });
}

export function getChatById(req: Request, res: Response): void {
    res.status(200).json({
        success: true,
        data: {},
        error: null,
    });
}


