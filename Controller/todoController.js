import Todo from '../Models/Todo.js';

export const createTodo = async (req, res)=>{
    const currentTodo = req.body;
    const newTodo = { id: Date.now(), title: req.body.title, completed: false };
    await Todo.create(newTodo);
    const updatedTodos = await Todo.find();
    res.send({
        status: 200,
        message: 'Todo created successfully',
        data: updatedTodos
    })
}

export const getAllTodos = async (req, res)=>{
    const allTodos = await Todo.find();
    res.send(allTodos);
}

export const deleteTodo = async (req, res)=>{
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    const updatedTodos = await Todo.find();
    res.send({
        status: 200,
        message: 'Todo deleted successfully',
        data: updatedTodos
    })
}

export const updateTodo = async (req, res)=>{
    const id = req.params.id;
    const updatedTodo = req.body;
    await Todo.findByIdAndUpdate(id, updatedTodo);
    const updatedTodos = await Todo.find();
    res.send({
        status: 200,
        message: 'Todo updated successfully',
        data: updatedTodos
    })
}