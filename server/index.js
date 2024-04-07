const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User.js')

const app = express()
app.use(express.json())
app.use(cors)

mongoose.connect("mongodb+srv://myAtlasDBUser:135790@myatlasclusteredu.ufhaxua.mongodb.net/usersDatabase?retryWrites=true&w=majority&appName=myAtlasClusterEDU")

app.post('/signup', (req,res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.listen(3001, () => {
  console.log("Server is running!")
})