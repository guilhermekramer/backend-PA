const userService = require("../service/userService");

const createUserController = async (response) => {
  console.log("Request:" + request.body);
  try {
    const userRequest = request.body;
    const User = await userService.createUser(userRequest);

    return response.status(201).json(User);
  } catch (error) {
    console.error("erro ao criar um usuario: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const getAllUsersController = async (response) => {
  try {
    const users = await userService.getAllUsers();
    return users;
  } catch (error) {
    console.log("Erro ao buscar users: " + error);
    return response.status(500).json({ error: "Erro De servidor" });
  }
};

const deleteUserController = async (request, response) => {
  try {
    const user = request.body;
    await userService.deleteUser(user);

    return response
      .status(200)
      .json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar usuário: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const getUserByIdController = async (request, response) => {
  try {
    const userId = request.params.id;
    const user = await userService.getUserById(userId);

    return response.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário pelo ID: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const getUserByUsernameController = async (request, response) => {
  try {
    const username = request.params.username;
    const user = await userService.getUserByUsername(username);

    return response.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário pelo username: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

const updateUserController = async (request, response) => {
  try {
    const user = request.body;
    await userService.updateUser(user);

    return response
      .status(200)
      .json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar usuário: ", error);

    return response.status(500).json({ error: "Erro de servidor" });
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  deleteUserController,
  getUserByIdController,
  updateUserController,
  getUserByUsernameController,
};
