const user = require('../models/userModel');

const getUsers = async (req,res)=>
{
    const users = await user.find();
    res.json(users);
}

const createUser = async (req,res)=>
{
    try {
        const { name, email } = req.body;
        const newUser = new user({ name, email }); // Fixed: 'user' not 'User'
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getUsers,
    createUser
};