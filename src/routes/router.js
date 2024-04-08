const express = require("express");
const gastos = require("../controllers/gastosController");
const router = express.Router();

router.get("/gastos", gastos.getAll);
module.exports = router;
