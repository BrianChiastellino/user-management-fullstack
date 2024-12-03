export class JwtPayloadDTO {
    subject_id         :   string;
    admin       :   boolean;
    iat?        :   number;
    exp?        :   number; 
};