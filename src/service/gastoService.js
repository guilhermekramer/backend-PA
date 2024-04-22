const { prisma } = require("../repository/db.config.js");

const getAllGastos = async () => {
  try {
    const gasto = await prisma.gasto.findMany();
    console.log(gasto);
    return gasto;
  } catch (error) {
    console.log("Erro no método de Serviço: " + error);
    return error;
  }
};

const getGastoById = async (gastoId) => {
  try {
    const gasto = await prisma.gasto.findUnique({
      where: {
        id: gastoId,
      },
    });
    return gasto;
  } catch (error) {
    console.error("Erro ao buscar Gasto pelo ID:", error);
    throw error;
  }
};

const createGasto = async (gasto) => {
  try {
    const Gasto = await prisma.gasto.create({
      data: {
        id: gasto.id,
        name: gasto.name,
        descricao: gasto.descricao,
        valor: gasto.valor,
        created_at: new Date(),
      },
    });

    console.log("gasto criado com sucesso");
    return Gasto;
  } catch (error) {
    console.error("Erro ao criar um novo gasto:", error);
    throw error;
  }
};

const deleteGasto = async (gastoId) => {
  try {
    await prisma.gasto.delete({
      data: gastoId,
    });
    console.log("gasto deletado com sucesso");
  } catch (error) {
    console.log("Erro na deleção de gasto: " + error);
  }
};

module.exports = {
  deleteGasto,
  createGasto,
  getAllGastos,
  getGastoById,
};

84988454784;
