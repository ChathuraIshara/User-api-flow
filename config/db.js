const mongoose = require('mongoose');

const connectDb = async () =>{
    try{
        console.log('Attempting to connect with URI:', process.env.MONGO_URI);
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is not defined');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    }catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }

};

module.exports = connectDb;