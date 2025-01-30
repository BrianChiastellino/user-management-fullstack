import express from 'express';
import adminController from '../controller/admin.controller';


const router = express.Router();


router.get('/getAll', adminController.getAll );

export default router;