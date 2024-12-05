import express, { Response } from 'express';
import playerController from '../controller/player.controller';

const router = express.Router();

router.get('/', playerController.getAll );

router.post('/', playerController.create );

router.route('/:id')
.get( playerController.getByID )
.put( playerController.update )
.delete( playerController.delete );

export default router;