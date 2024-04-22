// JavaScript
import { getUserByUsernameController } from "../controllers/userController";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = require("./app");

const users = {
  admin: {
    username: "admin",
    password: bcrypt.hashSync("admin", 8),
  },

  user: {
    username: "user",
    password: bcrypt.hashSync("user", 8),
  },
};
const userGet = async (username) => {
  try {
    return await getUserByUsernameController({
      params: { username: username },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const loginPost = async () => {
  app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
      const user = await userGet(username);

      if (!user) {
        return res.status(400).send("No such user found");
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }

      if(!users[username]) {
        return res.status(400).send("No such user found");
      }

      if(!users[username].password === password) {
        return res.status(401).send({ auth: false, token: null });
      }

      
      const token = jwt.sign({ id: username }, "supersecret", {
        expiresIn: 86400, // expires in 24 hours
      });

      res.status(200).send({ auth: true, token: token });
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  });
};

export default loginPost;
