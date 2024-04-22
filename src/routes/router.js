const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const gastoController = require("../controllers/gastoController");

router.get("/users", userController.getAllUsersController);
router.post("/createUser", userController.createUserController);
router.post("/deleteUser", userController.deleteUserController);
router.get("/user/:id", userController.getUserByIdController);
rouget.put("/updateUser", userController.updateUserController);

router.get("/gastos", gastoController.getAllGastosController);
router.get("/gasto/:id", gastoController.getGastoByIdController);
router.post("/createGasto", gastoController.createGastoController);
router.post("/deleteGasto", gastoController.deleteGastoController);
router.put("/updateGasto", gastoController.updateGastoController);

module.exports = router;
