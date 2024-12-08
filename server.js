const express = require('express');
const cors = require('cors');
const app = express();
const { connectDb } = require('./Config/dbConnection');
const todoRoutes = require('./Routes/todoRoutes');
const dotenv = require('dotenv');
dotenv.config();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// mount todo routes
app.use('/todos/', todoRoutes);

// Connecting to mongodb atlas
connectDb();

// For prod testing
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// Remove the app.listen() call for Vercel deployment
module.exports = app;


// For Dev 
// app.listen(process.env.PORT, ()=>{
//     console.log('Server is running on port 3000');
// });
