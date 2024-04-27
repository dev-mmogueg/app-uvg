'use strict'

/* ----- IMPORT'S ----- */
const User = require('./user.model');
const File = require('../utils/file.controller');
const { create_token } = require('../services/jwt');
const { verify, encrypt, check } = require('../utils/validate');

/* ----- CREATE DEFAULT USER (ADMIN) ----- */
exports.def_ = async () => {
  try {
    if (!await User.findOne({ 'profile.username': 'mog241257' })) {
      const data = {
        name: 'Mynor Alejandro',
        surname: 'Mogue Godoy',
        birthday: new Date('2005-02-22'),
        profile: {
          username: 'mog241257',
          password: '220',
          email: 'mog241257@uvg.edu.gt',
          role: 'admin'
        }
      }
      data['profile']['password'] = encrypt(data['profile']['password']);
      const user_one = new User(data);
      await user_one.save();
      const data_two = {
        name: 'Binestar',
        surname: 'Estudiantil',
        birthday: new Date('2024-04-01'),
        profile: {
          username: 'admin_uvg',
          password: 'admin_uvg',
          email: 'admin@uvg.edu.gt',
          role: 'admin'
        }
      }
      data_two['profile']['password'] = encrypt(data_two['profile']['password']);
      const user_two = new User(data_two);
      await user_two.save();
      console.log(`--> USER ADMIN UVG CREATE SUCCESSFULLY`);
      return console.log(`--> USER DEFAULT CREATE SUCCESSFULLY`);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}

/* --- LOGIN --- */
exports.login = async (req, res) => {
  try {
    const credentials = {
      usernameOrEmail: req.body.usernameOrEmail,
      password: req.body.password
    }
    const msg = verify(credentials);
    if (msg)
      return res.status(418).send(msg);
    const user = await User.findOne({
      $and: [{
        $or: [
          { 'profile.username': credentials.usernameOrEmail },
          { 'profile.email': credentials.usernameOrEmail }
        ]
      },
      { active: true }
      ]
    }).lean();
    if (user && check(credentials.password, user.profile.password)) {
      const token = await create_token(user);
      switch (user.profile.role) {
        case 'admin':
          user.profile.role = '3sas123';
          break;
        case 'user_g':
          user.profile.role = 'dTE31ss';
          break;
        case 'user_p':
          user.profile.role = '90weRWQ';
          break;
      }
      const logged = {
        f2sWWR: user._id,
        username: user.profile.username,
        email: user.profile.email,
        d3fr23r: new Date(user.birthday).getTime(),
        T4s2L3: user.profile.role
      }
      return res.send({ '4afe1w1': token, logged });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: `ERROR LOGGED` });
  }
}

/* --- REGISTER --- */
exports.register = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      surname: req.body.surname,
      birthday: req.body.birthday,
      profile: {
        password: req.body.password,
        email: req.body.email,
      }
    }
    const msg = verify(data);
    if (msg)
      return res.status(418).send(msg);
    const email_split = data['profile']['email'].split('@')[1].split('\.');
    console.log(email_split);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: `ERROR REGISTER NEW USER` });
  }
}

/* --- TEST ROUTES --- */
exports.test_ = (req, res) => {
  return res.status(200).send({ message: `Connection to USER routes` })
} 