import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";




export const authenticateJWT = (req: Request , res: Response, next: NextFunction) : void => {
    // Capturamos la cookie
    const token : string = req.cookies.token || req.header("authorization")?.replace('Bearer', '').trim();

    if ( !token ) {
        res.status(403).json({ message: "Acceso denegado. No se encuentra el token" });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (error, decoded ) => {
        if ( error || !decoded ) {
            res.status(403).json({ message: "Token inválido o expirado." });
            return;
        }

        const token : JwtPayloadDTO = ( decoded ) as JwtPayloadDTO;
        req.payload = token;
        
        next();
    });
};
