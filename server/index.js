const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User.js");

const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://myAtlasDBUser:135790@myatlasclusteredu.ufhaxua.mongodb.net/usersDatabase?retryWrites=true&w=majority&appName=myAtlasClusterEDU"
);

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      try {
        if (bcrypt.compare(req.body.password, user.password)) {
          res.json(user);
        } else {
          res.json("The Password is Incorrect");
        }
      } catch {
        res.status(500).send();
      }
    } else {
      res.json("No Record Existed");
    }
  });
});

app.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = {
      email: req.body.email,
      password: hashedPassword,
      money: 100,
    };

    UserModel.create(user)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  } catch {
    res.status(500).send();
  }
});

// Rota para atualizar um valor específico (update)
app.put("/update/:email", async (req, res) => {
  const { email } = req.params;
  const updatedUser = req.body;

  try {
    const user = await UserModel.findOneAndUpdate(
      { email: email }, // Filtro para encontrar o usuário pelo email
      { $set: updatedUser }, // Atualiza todos os campos com os novos dados
      { new: true } // Retorna o documento atualizado
    );

    if (user) {
      res.json(user); // Retorna o usuário atualizado
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running!");
});
