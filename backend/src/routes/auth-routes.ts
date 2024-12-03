import  express  from "express";
import authController from "../controller/auth-controller";

const router = express();

router.post('/login', authController.login );
router.post('/register', authController.register );

export default router;