import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";




export const authenticateJWT = (req: Request, res: Response, next: NextFunction) : void => {
    // const token = req.header("authorization")?.replace('Bearer', '').trim();
    const token = req.cookies.token;

    if ( !token ) {
        res.status(403).json({ message: "Acceso denegado. No se encuentra el token" });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (error : jwt.VerifyErrors | null , decoded : JwtPayload | undefined | string ) => {
        if (error || typeof decoded !== "object" || !decoded) {
            res.status(403).json({ message: "Token inválido o expirado." });
            return;
        }

        console.log({ decoded });

        req.jwtoken = decoded;

            //todo: Arreglar problema con tipado Request
            
        next();
    });
};
