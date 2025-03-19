import UserModel from '../Models/UserModel.js';

const userController = {
  async createUser(req, res) {
    try {
      const { username, email, country } = req.body;
      const user = await UserModel.createUser({ username, email, country });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
      if (!user) return res.status(404).json({ message: 'Utilisateur introuvanle' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },


  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const user = await UserModel.updateUser(id, updates);
      res.json(score);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default userController;