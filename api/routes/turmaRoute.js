import { Router } from 'express';
import turmaController from '../controllers/turmaController';

const router = Router();

router.get('/turma', turmaController.getTodasTurmas);
router.get('/turma/:id', turmaController.getUmaTurma);
router.post('/turma', turmaController.criaTurma);
router.put('/turma/:id', turmaController.atualizaTurma);
router.delete('/turma/:id', turmaController.apagaTurma);
