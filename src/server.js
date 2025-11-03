const express = require('express');
const mainRoute = require('./Routes/mainRoute')

const app = express();

app.use(express.json());

app.use('/api', mainRoute)




module.exports = app 