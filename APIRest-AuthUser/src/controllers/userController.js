const userModel = require('../models/userModel')
const { hashSync, compareSync } = require('bcryptjs')
const { validateLogin, validateRegister } = require('./validateDatas')
const JWT = require('jsonwebtoken');

const userController = {
  login: async (req, res) => {
    const { password, email } = req.body;

    const { error } = validateLogin(req.body)
    if (error) return res.status(400).send(error.message)

    const selectedUser = await userModel.findOne({ email });
    const passwordAndUserMatch = compareSync(password, selectedUser.password);

    if (!selectedUser || !passwordAndUserMatch)
      return res.status(400).send('Email ou password incorreto');

    const token = JWT.sign(
      { _id: selectedUser._id, admin: selectedUser.admin },
      process.env.SECRET_TOKEN_KEY
    );

    res.header('authorization-token', token)
    res.send('Usuário logado');
  },
  register: async (req, res) => {
    const { name, password, email } = req.body;

    const { error } = validateRegister(req.body)
    if (error) return res.status(400).send(error.message)
    
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) return res.status(400).send('Email já existente');

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