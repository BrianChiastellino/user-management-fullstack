import  express  from "express";
import authController from "../controller/auth.controller";

const router = express();

router.post('/login', authController.login );
router.post('/register', authController.register );

router.post('/logout', authController.logout );

router.get('/check', authController.checkAuth );


export default router;