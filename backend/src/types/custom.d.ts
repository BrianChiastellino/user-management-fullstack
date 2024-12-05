import { JwtPayloadDTO } from '../dto/jwt-paylaod.dto';

declare global {
    namespace Express {
        interface Request {
            jwtPayloadDTO: JwtPayloadDTO;
        }
    }
}
