var express = require('express')
var app = express()
var path = require('path');
var port = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, './public/index.html'))
})
app.get('/facebook', function (req, res) {
    res.redirect('http://facebook.com')
})
app.get('/google', function (req, res) {
    res.redirect('http://google.com')
})
app.get('/twitter', function (req, res) {
    res.redirect('http://twitter.com')
})



app.post('/login', function (req, res) {
    if (req.body.user === 'admin' && req.body.pass === '123456') {
        res.json('Đăng nhập thành công')
    } else {
        res.redirect(alert('lỗi'))


    }
})

app.get('/sum:a/:b', (req, res) => res.json("Tong 2 so:" + (parseInt(req.params.a) + parseInt(req.params.b))))

app.get('/download', (req, res) => {
    res.download("./Korea.jpg")
})

app.post('/post', function (req, res) {
    res.json({
        use: req.body.user,
        pass: req.body.pass
    })
})

app.listen(port, () => console.log(`Chạy cổng:` + port))