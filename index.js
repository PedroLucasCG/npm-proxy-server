const express = require('express')
const cors = require('cors')
require('dotenv').config()
//const rateLimit = require('express-rate-limit')

const PORT = process.env.PORT || 5000

const app = express()

//rate limiting
/*
const limiter = rateLimit({
    windowMS: 10 * 60 * 1000,
    max: 5
})
*/
//app.use(limiter)
app.set('trust proxy', 1)

//routes
app.use('/api', require('./routes'))

//set static folder
//app.use(express.static('public'))

app.use(cors({
    origin: "*",
}))
app.listen(PORT, () => console.log("Verificando a porta "+PORT.toString()))