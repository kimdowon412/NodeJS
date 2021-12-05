const express = require('express')
const router = express.Router()

// admin/write
router.get('/write', (req, res) => {
    res.render('admin/write.html')
})

router.post('/write', (req, res) => {
    res.send(req.body)
})

module.exports = router