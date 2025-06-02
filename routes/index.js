const express = require('express')
const router = express.Router()

const todos = [{
    id : '1',
    task : 'buy milk',
}]

router.get('/todo', (req, res)=>{
    res.render('index', {todos})
})

module.exports = router