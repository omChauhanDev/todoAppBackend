// Creating to do routes
const express = require('express');
const router = express.Router();

const { createTodo, getAllTodos, deleteTodo, updateTodo } = require('../Controller/todoController');

// Define routes and map controllers
router.post('/create', createTodo);
router.get('/getAll', getAllTodos);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);


module.exports = router;
