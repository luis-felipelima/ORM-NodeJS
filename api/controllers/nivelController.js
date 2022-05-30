/* eslint-disable import/extensions */
import database from '../models/index.js';

class NivelController {
  static async getTodosNiveis(req, res) {
    try {
      const todosNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUmNivel(req, res) {
    const { id } = req.params;
    try {
      const umNivel = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(umNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel);
      return res.status(200).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Niveis.update(novasInfos, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number(id) } });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.messagge);
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `O id com número ${id} foi removido` });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

export default NivelController;
