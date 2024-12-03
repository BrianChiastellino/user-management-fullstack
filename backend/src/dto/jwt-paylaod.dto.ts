export class JwtPayloadDTO {
    sub         :   string;
    admin       :   boolean;
    iat?        :   number;
    exp?        :   number; 
};