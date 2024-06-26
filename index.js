const app = require("./src/app");
require("dotenv").config();
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("swagger.yaml");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
