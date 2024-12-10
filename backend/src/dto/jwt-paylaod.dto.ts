import { UserRole } from "../enums/user-role.enum";
import { JwtPayload } from 'jsonwebtoken';

export class JwtPayloadDTO {
    subjectId         :   string;
    role       :   UserRole;
    iat?        :   number;
    exp?        :   number; 
};