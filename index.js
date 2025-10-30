const axios = require('axios')
const { log } = require('node:console')

axios('https://jsonplaceholder.typicode.com/users')
.then(response => console.log(response.data))
.catch(err => console.error(err))

