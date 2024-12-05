import express from 'express';
import profileController from '../controller/profile.controller';


const router = express.Router();

router.get('/settings/account/me', profileController.get )
router.put('/settings/account/update', profileController.update )
router.delete('/settings/account/delete', profileController.delete )


export default router;