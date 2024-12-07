import 'express';
import { JwtPayloadDTO } from '../dto/jwt-paylaod.dto';

declare global {
  namespace Express {
    interface Request {
      payload?: JwtPayloadDTO; // La propiedad personalizada
    }
  }
}