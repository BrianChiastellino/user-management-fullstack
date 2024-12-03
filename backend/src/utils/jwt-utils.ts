import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import jwt from 'jsonwebtoken';


export const createToken = ( jwtPayloadDTO : JwtPayloadDTO ) : string => {
    return jwt.sign( jwtPayloadDTO, process.env.AUTH_SECRET_KEY! , { expiresIn: '1hs'});
};

export const verifyToken = async (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.AUTH_SECRET_KEY!, (err, decoded) => {
            if (err) {
                reject(new Error('Token no válido o expirado'));
            } else {
                resolve(decoded);
            }
        });
    });
};

