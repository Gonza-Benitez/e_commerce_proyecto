const {Router} = require('express')

const productsRoute = Router ()

// productos
productsRoute.get("/", (req, res) => {
  res.send("Traer todos los productos")
})

module.exports = productsRoute