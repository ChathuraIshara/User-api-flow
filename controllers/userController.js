const user = require('../models/userModel');

// Controllers - Purpose: Handle request/response logic and coordinate between routes and services


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

const updateUser = async (req,res)=>{
    const { id } = req.params; 
    const { name, email } = req.body;

    try {
        const updatedUser = await user.findByIdAndUpdate(id, { name, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteUser = async (req,res)=>{
    const { id } = req.params;
    try {
        const deletedUser = await user.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};