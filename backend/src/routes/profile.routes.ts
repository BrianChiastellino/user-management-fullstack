import express from 'express';
import profileController from '../controller/profile.controller';


const router = express.Router();

router.get('/settings/account/me/:id', profileController.get )
router.put('/settings/account/update:id', profileController.update )
router.delete('/settings/account/delete/:id', profileController.delete )


export default router;