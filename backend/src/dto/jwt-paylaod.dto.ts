import { UserRole } from "../enums/user-role.enum";
import { Request } from "express";

export class JwtPayloadDTO {
    subjectId         :   string;
    role       :   UserRole;
    iat?        :   number;
    exp?        :   number; 
};