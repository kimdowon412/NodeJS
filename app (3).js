const express = require('express')
const soft = require('./routes/soft')
const nunjucks = require('nunjucks')
const { send } = require('process')
const app = express()
const port = 3002

nunjucks.configure('template', {
    autoescape : true, 
    express : app
})

app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
    console.log('Server ON!!')
})

app.use(express.json())
// query-string 모듈 사용
app.use(express.urlencoded({extended: false}))

app.use('/soft', soft)
app.use(express.json())

function testMiddleware(req, res, next) {
    console.log('첫번째 미들웨어 실행!')
    next()
}

app.get('/', testMiddleware,(req,res) => {
    res.send('기본 홈 입니다.')
    res.body.name
})