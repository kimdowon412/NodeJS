const express = require('express')
const router = express.Router()

router.get('/school', (req, res) => {
    res.send('기본 홈')
})

router.get('/school/soft', (req, res) => {
    res.send('기본 홈')
})

router.get('/school/bio', (req,res) => {
    res.send('기본 홈')
})

router.get('/school/skills', (req, res) => {
    res.send('기본 홈')
})