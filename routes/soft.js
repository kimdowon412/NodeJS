const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('/soft 로 접속')
})

router.get('/java', (req, res) => {
    res.send('/soft/java 로 접속')
})

router.get('/algo', (req, res) => {
    res.send('/soft/algo 로 접속')
})

router.get('/db', (req, res) => {
    res.send('/soft/db 로 접속')
})

router.get('/view', (req, res) => {
    res.render('soft/products.html')
})

module.exports = router