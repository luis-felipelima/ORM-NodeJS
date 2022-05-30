import { Router } from 'express';
import NivelController from '../controllers/nivelController';

const router = Router();

router.get('/nivel', NivelController.getTodosNiveis);
router.get('/nivel/:id', NivelController.getUmNivel);
router.post('/nivel', NivelController.criaNivel);
router.put('/nivel/:id', NivelController.atualizaNivel);
router.delete('/nivel/:id', NivelController.apagaNivel);

export default router;
