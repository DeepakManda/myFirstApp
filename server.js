const express = require('express')
const app = express()
const port = process.env.port||3000

app.get('/',
 (req, res) => res.send('Hello World!'))

 app.get('/',
 (req, res) => res.send('welcome to login page'))


 app.get('/firstPage',function(req,res)
 {
    res.sendFile(__dirname + '/welcome.html');
 })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))