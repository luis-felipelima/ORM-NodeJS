/* eslint-disable import/extensions */
import { Router } from 'express';
import PessoaController from '../controllers/pessoaController.js';

const router = Router();

router.get('/pessoas', PessoaController.getTodasPessoas);
router.get('/pessoas/:id', PessoaController.getUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.getUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

export default router;
