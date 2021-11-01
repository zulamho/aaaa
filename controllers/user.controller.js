const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, login, password, ConfirmPassword } = req.body;

      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .status(401)
          .json({ error: `Пользователь с логином ${login} уже существует!` });
      }

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        name,
        email,
        login: login,
        password: hash,
        ConfirmPassword,
      });
      res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при регистрации: " + error.toString(),
      });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({
      login,
    });

    if (!candidate) {
      return res.status(401).json({ error: "Неверный логин!" });
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json({ error: "Неверный пароль!" });
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    res.json({ token });
  },

  getUser: async (req, res) => {
    try {
      const get = await User.find();
      res.json(get);
    } catch (err) {
      res.json(err);
    }
  },
  editUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id);
      res.json("Пользователь изменен");
    } catch (err) {
      res.json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
