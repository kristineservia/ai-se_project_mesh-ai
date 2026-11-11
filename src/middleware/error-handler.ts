import type { Request, Response, NextFunction } from "express";

//errorHandler() function
export function errorHandler(
    err: Error, 
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(500).json({
        success: false,
        data: null,
        error: "Internal Server Error",
    });
}