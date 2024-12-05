import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";
import jwt from 'jsonwebtoken';


export const createToken = ( jwtPayloadDTO : JwtPayloadDTO ) : string => {
    return jwt.sign( jwtPayloadDTO, process.env.JWT_SECRET! , { expiresIn: process.env.JWT_EXPIRES_IN });
};



