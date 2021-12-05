require('express')
const app = express()
const port = 3000

//포트 개방
app.listen(port, () => {
    console.log('Server ON!')
})
// 홈 경로
app.get('/yydh',(req, res)  => {
    res.sende('성공')
})
