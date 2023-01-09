const userModel = require('../models/userModel')

const userController = {
  login: (req, res) => {
    res.send('login')
  },
  register: async (req, res) => {
    const { name, password, email } = req.body;
    const newUser = new userModel({ name, password, email });

    try {
      const savedUser = await newUser.save();
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

module.exports = userController;