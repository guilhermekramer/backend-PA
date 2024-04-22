const gastoService = require("../service/gastoService");

const createGastoController = async (request, response) => {
  console.log("Request:" + request.body);
  try {
    const gastoRequest = request.body;
    const Gasto = await gastoService.createGasto(gastoRequest);

    return response.status(201).json(Gasto);
  } catch (error) {
    console.error("erro ao criar um gasto: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const getAllGastosController = async (response) => {
  try {
    const gastos = await gastoService.getAllGastos();
    return gastos;
  } catch (error) {
    console.log("Erro ao buscar gastos: " + error);
    return response.status(500).json({ error: "Erro De servidor" });
  }
};

const deleteGastoController = async (request, response) => {
  try {
    const gasto = request.body;
    await gastoService.deleteGasto(gasto);

    return response.status(200).json({ message: "Gasto deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar gasto: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const getGastoByIdController = async (request, response) => {
  try {
    const gastoId = request.params.id;
    const gasto = await gastoService.getGastoById(gastoId);

    return response.status(200).json(gasto);
  } catch (error) {
    console.error("Erro ao buscar gasto pelo ID: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const updateGastoController = async (request, response) => {
  try {
    const gasto = request.body;
    await gastoService.updateGasto(gasto);

    return response
      .status(200)
      .json({ message: "Gasto atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar gasto: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

module.exports = {
  createGastoController,
  getAllGastosController,
  deleteGastoController,
  getGastoByIdController,
  updateGastoController,
};
