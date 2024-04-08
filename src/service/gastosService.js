const db = require("../repository/connection");

const getAll = async () => {
  const gastos = await db.query("SELECT * FROM 'gastos' ");
  return gastos;
};

module.exports = { getAll };
