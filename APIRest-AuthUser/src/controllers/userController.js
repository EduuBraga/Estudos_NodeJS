const userModel = require('../models/userModel')
const { hashSync, compareSync } = require('bcryptjs')

const userController = {
  login: async(req, res) => {
    const { password, email } = req.body;

    const selectedUser = await userModel.findOne({email});
    const passwordAndUserMatch = compareSync(password, selectedUser.password);
    
    if(!selectedUser || !passwordAndUserMatch) 
      return res.status(400).send('Email ou password incorreto');

    res.send('Usuário logado');
  },
  register: async (req, res) => {
    const { name, password, email } = req.body;

    const existingEmail = await userModel.findOne({email});
    if(existingEmail) return res.status(400).send('Email já existente');

    const newUser = new userModel({ name, password: hashSync(password), email });

    try {
      const savedUser = await newUser.save();
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = userController;