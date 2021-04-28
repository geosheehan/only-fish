const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
// requires that the user is logged in/authorized 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//routes to the following functions

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router