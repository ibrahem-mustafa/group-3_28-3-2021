// const express = require('express')
// const router = express.Router()
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user.model");

const { UserDto } = require("../dto/user.dto");
const { JWT_KEY } = require("../config/keys");

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  // check if user exists
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword)
    return res.status(400).json({ msg: "Invalid Credentials" });

  const data = UserDto(user);

  const token = jwt.sign(data, JWT_KEY);

  res.json({ user: data, token, accounts: user.accounts, transactions: user.transactions });
});

router.post("/signup", async (req, res) => {
    const {email, password,name} = req.body

    const existedUser = await User.findOne({email})

    if (existedUser)
      return res.status(400).json({ msg: "User Already Exists" });

    const user = new User({
        email,
        name
    })

    const hashedPassword = bcrypt.hashSync(password, 10)
    user.password = hashedPassword;


    await user.save();

    res.status(201).json({msg: 'User Created Successfully'})

});

module.exports = router;
