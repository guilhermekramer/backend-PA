const gastosModel = require("../service/gastosService");

const getAll = async (request, response) => {
  const gastos = await gastosModel.getAll();

  return response.status(200).json(gastos);
};

module.exports = {
  getAll,
};
