import type { Request, Response } from "express";

export function uploadDocument(req: Request, res: Response): void {
    res.status(201).json({
        success: true,
        data: {},
        error: null,
    });
}

export function getDocuments(req: Request, res: Response): void {
    res.status(200).json({
        success: true,
        data: {},
        error: null,
    });
}

export function getDocumentById(req: Request, res: Response): void {
    res.status(200).json({
        success: true,
        data: {},
        error: null,
    });
}

