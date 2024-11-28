import { Request, Response } from "express";





class AuthController {

    constructor () {}

    public async login ( req : Request, res : Response) {

        const { username, password } = req.body;

        




    }
}

export default new AuthController();