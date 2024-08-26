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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(PORT, () => console.log("Verificando a porta "+PORT.toString()))