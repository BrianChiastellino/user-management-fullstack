import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import { UnauthorizedError } from "../errors/unauthorized.error";




export const authenticateJWT = (req: Request , res: Response, next: NextFunction) : void => {
    try {
    // Capturamos la cookie
    const token : string = req.cookies.token;
    console.log({ token });

    if ( !token ) {
        throw new UnauthorizedError('Cookie not exists');
    }

    jwt.verify(token, process.env.JWT_SECRET!, (error, decoded ) => {
        if ( error || !decoded ) {
            throw new UnauthorizedError('Invalid or expired token ');
        }

        // Guardamos el token en el req para manipularlo con otros controladores
        const token : JwtPayloadDTO = ( decoded ) as JwtPayloadDTO;
        req.payload = token;
        
        next();
    });
    } catch ( error ) {
        next( error )
    }

};
