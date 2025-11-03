
const { createUserControllers } = require('../controllers/userControllers');


const getAllUserHandler = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`Trae al usuario con el nombre ${name}`);
  } else {
    res.send("Trae todos los usuarios");
  }
};

const getOneUserHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Trae al usuario con el ID: ${id}`);
};

const createUserHandler = (req, res) => {
  const { name, username, email } = req.body;
  const responde = createUserControllers( name, username, email );
  res.status(201).send(responde);
};

const updateUserHandler = (req, res) => {
  res.send("Usuario modificado");
};

const deleteUserHandler = (req, res) => {
  res.send("Usuario eliminado");
};

module.exports = {
  getAllUserHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
};