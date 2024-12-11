import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/custom-error";

export const errorHandler: ErrorRequestHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
        res.status(error.statusCode).json(error.serialize());
        return;
    }

    res.status(500).json({ 
        message: 'Ocurrió un error inesperado',
        error: error.message,
    });
};
