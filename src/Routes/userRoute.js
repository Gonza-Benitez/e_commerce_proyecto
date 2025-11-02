const {Router} = require('express');
const {getAllUserHandler, getOneUserHandler, createUserHandler, updateUserHandler, deleteUserHandler} = require("../handers/userHandlers");

const userRoute = Router ();

// usuarios

userRoute.get("/", getAllUserHandler);

userRoute.get("/:id", getOneUserHandler);

userRoute.post("/", createUserHandler);

userRoute.put("/:id", updateUserHandler);

userRoute.delete("/:id", deleteUserHandler);

module.exports = userRoute