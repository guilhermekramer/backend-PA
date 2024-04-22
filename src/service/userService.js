const { prisma } = require("../repository/db.config.js");

const getAllUsers = async () => {
  try {
    const user = await prisma.user.findMany();
    console.log(user);
    return user;
  } catch (error) {
    console.log("Erro no método de Serviço: " + error);
    return error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error("Erro ao buscar Usuáriro pelo ID:", error);
    throw error;
  }
};

const createUser = async (user) => {
  try {
    const User = await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        created_at: new Date(),
      },
    });

    console.log("usuario criado com sucesso");
    return User;
  } catch (error) {
    console.error("Erro ao criar um novo usuário:", error);
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    await prisma.user.delete({
      data: userId,
    });
    console.log("user deletado com sucesso");
  } catch (error) {
    console.log("Erro na deleção de usuário: " + error);
  }
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
