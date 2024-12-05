import { Request, Response } from "express";
import { JwtPayloadDTO } from "../dto/jwt-paylaod.dto";

class ProfileController {

    get ( req : Request, res : Response ) {

        //todo: Arreglar request
        const payload : JwtPayloadDTO = (req as any).jwtPayloadDTO;
        res.status(200).json({ payload })
    };

    update ( req : Request, res : Response ) {

        //todo: Arreglar request
        const payload : JwtPayloadDTO = (req as any).jwtPayloadDTO;
        res.status(200).json({ payload })
    };

    delete ( req : Request, res : Response ) {

        //todo: Arreglar request
        const payload : JwtPayloadDTO = (req as any).jwtPayloadDTO;
        res.status(200).json({ payload })
    };

}


export default new ProfileController();