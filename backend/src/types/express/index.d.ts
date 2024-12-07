import { JwtPayload } from "jsonwebtoken";
import { JwtPayloadDTO } from "../../dto/jwt-paylaod.dto";



declare global {
  namespace Express {
    interface Request {
      jwtoken: JwtPayload | JwtPayloadDTO
    }
  }
}