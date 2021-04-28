// bring in ALL delete button with the delete class (to a NodeList)
const deleteBtn = document.querySelectorAll('.del')
// bring in all incompleted tasks (to a NodeList)
const todoItem = document.querySelectorAll('span.not')
// bring in all completed tasks (to a NodeList)
const todoComplete = document.querySelectorAll('span.completed')

// create an array from the NodeList, loop through all of them, and add an event listener that listens for a click then runs deleteTodo on click
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

// create an array from the NodeList, loop through all items with span.not, and add an event listener that listens for a click then runs markComplete on click
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

// create an array from the NodeList, loop through all items with span.completed, and add an event listener that listens for a click then runs markIncomplete on click
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
  // <tag data-id="myID">
  // 'never talk to me or my parent again' 
  // todoID is the parent of the deleted button that was clicked (the specific todo li)
    const todoId = this.parentNode.dataset.id
    try{
      // await the response from the route/controller delete todo
      // delete the information that was returned in that response using the delete method
      // will ONLY delete a todo with an ID that matches the todoID
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })//This is the to do list item that's deleted (the json from the response is being console logged
      
        const data = await response.json()
        console.log(data)
        // reload page to see that delete item is now gone
        location.reload()
        //if there is an error this logs it
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
  // grab appropriate parent 
    const todoId = this.parentNode.dataset.id
    try{
      // follow markComplete path/wait for response and run put method
      // update the appropriate toDo accourding to the markComplete method
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
  //todoId creates path to grab the appropriate parent
    const todoId = this.parentNode.dataset.id
    try{ 
      //todos/markIncomplete is the path that we fetch our method from
      //method: 'put' inidcates that we are updating the object with the markIncomplete method
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}