import express, { Response } from 'express';
import userController from '../controller/user-controller';

const router = express.Router();

router.get('/', userController.getAll );

router.post('/', userController.create );

router.route('/:id')
.get( userController.getByID )
.put( userController.update )
.delete( userController.delete );


export default router;