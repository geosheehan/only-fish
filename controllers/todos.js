// reference Todo model which talks to database and organizes data
const Todo = require('../models/Todo')
//functions we are referring to in routes folder
module.exports = {
   //promise passing request and getting response, get to do items from database 
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            //Grab all the todos
            const todoItems = await Todo.find()
            //Grabs ALL todo items that have not been completed
            const itemsLeft = await Todo.countDocuments({completed: false})
            // renders todos on ejs
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    //promise 
    createTodo: async (req, res)=>{
        try{
          //creates new todo object using Todo schema
            await Todo.create({todo: req.body.todoItem, completed: false, microsoftId: req.user.microsoftId})
            console.log('Todo has been added!')
            // reloads todo page
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    //updates todoItem with completed: true
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    //updates todoItem with completed: false
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    //method that deleted todoItem
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    