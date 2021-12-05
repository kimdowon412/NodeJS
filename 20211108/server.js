const http = require('http')
http.createServer((req, res) => {
    res.write(200, {'Content-Type' : 'text/plain'})
    res.write('Hello Sever')
}).listen(3000)