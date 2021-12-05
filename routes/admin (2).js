const express = require('express')
const router = express.Router()

// localhost:3000/admin
router.get('/', (req, res) => {
    res.send('admin 이후 url')
})
// localhost:3000/admin/products
router.get('/products', (req, res) => {
    res.send('admin products')
})

router.get('/school', (req, res) => {
    res.send('admin school')
})

router.get('/soft', (req, res) => {
    res.send('admin soft')
})

router.get('/bio', (req, res) => {
    res.send('admin bio')
})

router.get('/skills', (req, res) => {
    res.send('admin skills')
})

module.exports = router