const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

//all todos
const todos = [];


// To add a new todo in our array
app.post('/create', (req, res)=>{
    const currentTodo = req.body;
    const newTodo = { id: Date.now(), title: req.body.title, completed: false };
    todos.push(newTodo);
    console.log('Current todo', currentTodo);
    console.log('Todos', todos);
    res.send({
        status: 200,
        message: 'Todo created successfully',
        data: todos
    })
});

// To update a todo
app.put('/update/:id', (req, res)=>{
    console.log('Updating todo request received from frontend', req.body);
    const id = req.params.id;
    console.log('frontend se ayi hai id', id);
    console.log(todos);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id == id);
    console.log('index', index);

    if(updatedTodo.title){
        todos[index].title = updatedTodo.title;
    } else {
        todos[index].completed = updatedTodo.completed;
    }

    res.send({
        status: 200,
        message: 'Todo updated successfully',
        data: todos
    })
});

// To get all todos
app.get('/todos', (req, res)=>{
    res.send(todos);
})

app.delete('/delete/:id', (req, res)=>{
    console.log('Deleting todo request received from frontend');
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
    res.send({
        status: 200,
        message: 'Todo deleted successfully',
        data: todos
    })
})



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});