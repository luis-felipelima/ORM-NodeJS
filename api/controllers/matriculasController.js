/* eslint-disable import/extensions */
import database from '../models/index.js';

class MatriculasController {
  static async getMatriculas(req, res) {
    try {
      const todasMatriculas = await database.Matriculas.findAll();
      return res.status(200).json(todasMatriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUmaMatricula(req, res) {
    const { id } = req.params;
    try {
      const umaMatricula = await database.Matriculas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    const novaMatricula = req.body;
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { id } = req.params;
    const novaInfos = req.body;
    try {
      await database.Matriculas.update(novaInfos, { where: { id: Number(id) } });
      const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(id) } });
      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaMatricula(req, res) {
    const { id } = req.params;
    try {
      await database.Matriculas.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `A matricula com o id ${id} foi removida` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default MatriculasController;
