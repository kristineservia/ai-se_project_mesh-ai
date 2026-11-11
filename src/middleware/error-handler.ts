import type { Request, Response, NextFunction } from "express";

//500 Internal Server Error  errorHandler() function
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

//404 Not Found Error  notFoundHandler() function
export function notFoundHandler(req: Request, res: Response) {
    res.status(404).json({
        success: false,
        data: null, 
        error: "Not Found",
    });
}