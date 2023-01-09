const userController = {
  login: (req, res) => {
    res.send('Login');
  },
  register: (req, res) => {
    res.send('register');
  }
};

module.exports = userController;