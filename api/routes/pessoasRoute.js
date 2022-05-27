/* eslint-disable import/extensions */
import { Router } from 'express';
import PessoaController from '../controllers/pessoaController.js';

const router = Router();

router.get('/pessoas', PessoaController.getTodasPessoas);
router.get('/pessoas/:id', PessoaController.getUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);

export default router;
