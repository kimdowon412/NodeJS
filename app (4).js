const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const app = express()
const port = 3000

app.use(express.json())  // 바디파서를 json형식으로 사용
app.use(express.urlencoded({ extended: false }))  // query-string 모듈을 사용하도록 옵션
app.use('/admin', admin)

app.use('/uploads', express.static('uploads'))


app.listen(port, () => {
    console.log('Server ON!')
})

nunjucks.configure('template', {
    autoescape : true,
    express : app
})



// function testMiddleware(req, res, next) {
//     console.log('첫번째 미들웨어 실행!')
//     next()
// }

// app.get('/', testMiddleware,(req, res) => {
//     res.send('기본 홈입니다.')
//     res.body.name
// })







