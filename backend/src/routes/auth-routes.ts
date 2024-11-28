import  express  from "express";
import authController from "../controller/auth-controller";

const router = express();

router.post('/', authController.login );

export default router;