'use strict'

/* ----- IMPORT'S ----- */
const User = require('./user.model');
const File = require('../utils/file.controller');
const { create_token } = require('../services/jwt');
const { verify, encrypt, check, check_tk } = require('../utils/validate');

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
    if ('uvg' in email_split) {
      data['profile']['role'] = 'user_p';
      data['profile']['username'] = data['profile']['email'].split('@')[0];
    }
    else {
      data['profile']['role'] = 'user_g';
      data['profile']['username'] = '';
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: `ERROR REGISTER NEW USER` });
  }
}

/* ----- GETS ----- */
// One

// All

// File
exports.get_file = async (req, res) => {
  try {
    const { qfi, qtk } = req.query;
    const tk = check_tk(qtk);
    if (!tk)
      return res.status(400).send({ message: `Invalid Token` });
    const data = await File.get(qfi);
    res.setHeader('Content-Type', `${data.contentType}`);
    return data.file.pipe(res);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: `ERROR FETTING FILE` });
  }
}

/* --- UPLOAD --- */
exports.upload = async (req, res) => {
  try {
    const { qui, qty } = req.query;
    const file = req.files.file;
    if (!file)
      return res.status(400).send({ message: `Have not sent an file` });
    const user = await User.findOne({
      $and: [
        { _id: qui },
        { active: true }
      ]
    });
    if (!user)
      return res.status(404).send({ message: `User not found or not exist` });
    const id_file = File.upload(file.path, file.type, qty);
    if (!id_file)
      return res.status(400).send({ message: `File extension is not supported` });
    switch (qty) {
      case 'i13fasgw': // Photo
        if (user.createdAt.getTime() != user.updatedAt.getTime())
          if (Date.now() < ((new Date(user.updatedAt).getTime()) + (1000 * 60 * 60 * 24 * 30)))
            return res.status(400).send({ message: `Time has not passed to be able to modify the photo again` });
        await User.updateOne({ _id: qui }, { 'profile.photo': id_file, updatedAt: new Date() }, { new: true });
        return res.send({ message: `Photo added successfully` });
      default:
        return res.status(400).send({ message: `Non-existent field` });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: `ERROR ULOAD PHOTO` });
  }
}

/* --- TEST ROUTES --- */
exports.test_ = (req, res) => {
  return res.status(200).send({ message: `Connection to USER routes` })
} 