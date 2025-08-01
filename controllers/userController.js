const user = require('../models/userModel');

const getUsers = async (req,res)=>
{
    const users = await user.find();
    res.json(users);
}

module.exports = {
    getUsers
};