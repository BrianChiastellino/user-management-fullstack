import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';


export const authenticateJWT = ( req : Request, res : Response, next : NextFunction  ) => {
    try {
        const token = req.header('authorization')?.replace('Bearer', '');

        if ( !token )
            return res.status(403).json({ message : 'Acceso denegado '});

        jwt.verify( token, process.env.JWT_SECRET!, ( error, user ) => {
            if ( error )
                return res.status(403).json({ message : 'Token invalido' });
            
            next();
        });
    } catch ( error ) {
        res.status(500).json({ error : 'Server Error'});
    }
}