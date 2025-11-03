const users = require("../db/database");

const createUserControllers = (name, username, email) => {
    const id = users.length + 1
    const newUser = {id, name, username, email};
    return newUser;
    
};

module.exports = {
    createUserControllers,
};

