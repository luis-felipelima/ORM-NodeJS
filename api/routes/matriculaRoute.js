import { Router } from 'express';
import MatriculasController from '../controllers/matriculasController';

const router = Router();

router.get('/matriculas', MatriculasController.getMatriculas);
router.get('/matriculas/:id', MatriculasController.getUmaMatricula);
router.post('/matriculas', MatriculasController.criaMatricula);
router.put('/matricula/:id', MatriculasController.atualizaMatricula);
router.delete('/matriculas/:id', MatriculasController.apagaMatricula);
