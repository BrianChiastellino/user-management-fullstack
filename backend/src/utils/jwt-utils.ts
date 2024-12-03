import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import jwt from 'jsonwebtoken';


export const createToken = ( jwtPayloadDTO : JwtPayloadDTO ) : string => {
    return jwt.sign( jwtPayloadDTO, process.env.JWT_SECRET! , { expiresIn: process.env.JWT_EXPIRES_IN });
};

export const verifyToken = async (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
            if (err) {
                reject(new Error('Token no válido o expirado'));
            } else {
                resolve(decoded);
            }
        });
    });
};

