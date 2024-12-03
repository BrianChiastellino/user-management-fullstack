import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    try {
        // Obtener el token del encabezado Authorization y limpiar el formato
        const token = req.header("authorization")?.replace('Bearer', '').trim();

        // Verificar si no hay token
        if (!token) {
            res.status(403).json({ message: "Acceso denegado. Token no proporcionado." });
            return; // Detener la ejecución del middleware
        }

        // Verificar el token
        jwt.verify(token, process.env.JWT_SECRET!, (error, decoded) => {
            if (error) {
                res.status(403).json({ message: "Token inválido o expirado." });
                return; // Detener la ejecución del middleware
            }

            // Guardar la información decodificada en req.user
            (req as any).user = decoded as JwtPayload; // Usa un tipo específico si tienes uno
            next(); // Continuar al siguiente middleware o controlador
        });
    } catch (error) {
        res.status(500).json({ message: "Error de servidor", error: error instanceof Error ? error.message : error });
    }
};
