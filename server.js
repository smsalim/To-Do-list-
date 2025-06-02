const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

app.get('/', (req, res) =>{
    res.send("welcome")
})

app.listen(4000)