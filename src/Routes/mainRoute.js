const productsRoute = require('./productsRoute')
const userRoute= require('./userRoute')
const {Router} = require('express')

const mainRoute = Router ()

// Ruta de usuarios
mainRoute.use('/users', userRoute)

// Ruta de productos
mainRoute.use('/products', productsRoute)


module.exports = mainRoute