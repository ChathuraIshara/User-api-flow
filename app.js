const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectDb = require('./config/db');

dotenv.config();// For loading env values to the nodejs process,then we can access them via env.process
connectDb(); // Connect to MongoDB

const app = express(); //create an express app
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api/users', userRoutes); // Mount user routes

const port = process.env.PORT;
app.listen(port,()=>console.log('Server is running on port',port)); // Start the server 