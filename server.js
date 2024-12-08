// Imports
const express = require('express');
const cors = require('cors'); 
const app = express();
const { connectDb } = require('./Config/dbConnection');
const todoRoutes = require('./Routes/todoRoutes');
const dotenv = require('dotenv');
dotenv.config();


// Middlewares
app.use(cors()); 
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port 3000');
});

// mount todo routes
app.use('/todos/', todoRoutes);

// Connecting to mongodb atlas
connectDb();