export class JwtPayloadDTO {
    id  :   string;
    username    :   string;
    email       :   string;
    document    :   string;
    admin       :   boolean;
    exp?         :   number; 
};