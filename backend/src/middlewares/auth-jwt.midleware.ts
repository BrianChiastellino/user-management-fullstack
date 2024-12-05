import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) : void => {
    const token = req.header("authorization")?.replace('Bearer', '').trim();

    if ( !token ) {
        res.status(403).json({ message: "Acceso denegado. No se encuentra el token" });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (error, decoded) => {
        if (error || typeof decoded !== "object" || !decoded) {
            res.status(403).json({ message: "Token inválido o expirado." });
            return;
        }

            //todo: Arreglar problema con tipado Request
            (req as any).jwtPayloadDTO = decoded as JwtPayloadDTO;
        next();
    });
};
