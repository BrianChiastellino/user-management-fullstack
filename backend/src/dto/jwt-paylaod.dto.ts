import { UserRole } from "../enums/user-role.enum";
import { JwtPayload } from 'jsonwebtoken';

export class JwtPayloadDTO implements JwtPayload {
    subjectId         :   string;
    role       :   UserRole;
    iat?        :   number;
    exp?        :   number; 
};