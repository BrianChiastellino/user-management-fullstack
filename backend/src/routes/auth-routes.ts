import  express  from "express";
import authController from "../controller/auth-controller";

const router = express();

router.get('/login', authController.login );
router.post('/register', authController.register );

export default router;