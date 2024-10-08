const express = require('express')
const needle = require('needle')
const apicache = require('apicache')
const router = express.Router()

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

//Init Cache
let cache = apicache.middleware

router.get("/", cache('2 minutes'),  async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: [API_KEY_VALUE],
            ...req.query
        })

        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        res.status(200).json(data)
    }catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router