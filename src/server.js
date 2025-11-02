const express = require('express')
const mainRoute = require('./Routes/mainRoute')
/*const morgan = require('morgan')*/

const app = express()

app.use(express.json())

app.use("/api", mainRoute)

/*app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log('Probando mi middleware')
    next()
    
})*/





module.exports = app 