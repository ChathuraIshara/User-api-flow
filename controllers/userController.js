const user = require('../models/userModel');

const getUsers = async (req,res)=>
{
    const users = await user.find();
    res.json(users);
}

const createUser = async (req,res)=>
{
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
}

module.exports = {
    getUsers,
    createUser
};