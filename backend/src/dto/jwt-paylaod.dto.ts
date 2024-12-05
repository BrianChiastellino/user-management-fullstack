import { UserRole } from "../enums/user-role.enum";

export class JwtPayloadDTO {
    subjectId         :   string;
    role       :   UserRole;
    iat?        :   number;
    exp?        :   number; 
};