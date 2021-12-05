const express = require('express')
const admin = require('./routes/admin')
const app = express()
const port = 3000

//포트 개방
app.listen(port, () => {
    console.log('Server ON!')
})
// 홈 경로

app.use('/admin', admin)

app.get('/',(req, res)  => {
    res.send('기본 홈')
})

app.get('/yydh',(req, res)  => {
    res.send('성공')
})

app.get('/school', (req, res) => {
    res.send('기본 홈')
})

app.get('/school/soft', (req, res) => {
    res.send('기본 홈')
})

app.get('/school/bio', (req, res) => {
    res.send('기본 홈')
})

app.get('/school/skills', (req, res) => {
    res.send('기본 홈')
})