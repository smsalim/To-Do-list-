const express = require('express')
const router = express.Router()

const todos = [{
    id : '1',
    task : 'buy milk',
},
{
    id : '2',
    task : 'buy eggs'
}]

router.get('/todo', (req, res)=>{
    res.render('index', {todos})
})

router.get('/newTodo', (req, res)=>{
    res.render('new')
})

router.post('/newTodo', (req, res)=>{
    const newTask = req.body.task
    if(newTask){
        const newTodo = {
            id : todos.length + 1,
            task : newTask
        }
        todos.push(newTodo)
    }
    res.redirect('/todo')
})

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id
    const todo = todos.filter(todo => todo.id === id)
    res.render('edit', {todo: todo[0]})

    
})

router.post('/edit/:id', (req, res)=>{
    const id = req.params.id
    const newTask = req.body.todo
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if(todoIndex !== -1 && newTask){
        todos[todoIndex].task = newTask
    }
    res.redirect('/todo')
})


module.exports = router