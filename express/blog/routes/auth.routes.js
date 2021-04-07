const {Router} = require('express')
const router = Router()

const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const {User} = require('../models/user.model')

const {UserDto} = require('../dto/user.dto')

const {JWT_KEY} = require('../config/auth.config')

router.post('/signup', async (req, res) => {

    const {name, email, password} = req.body

    // Check If Email Exists In Any Account
    const existingUser = await User.findOne({email})

    // If Email Exist
    if (existingUser) return res.status(400).json({message: "Email Is Already Exist"})
    
    // IF Email Not Found
    
    // Hash User Password
    const hashedPassword = bcrypt.hashSync(password, 10)
    
    // Create User Account
    const user = new User({
        name,
        email,
        password: hashedPassword
    })
    
    // Save User Data
    await user.save()

    // Send Back User Info
    res.json({user: UserDto(user)})

})

router.post('/signin', async (req, res) => {

    const {email, password} = req.body

    const existingUser = await User.findOne({email})

    if (!existingUser) return res.status(400).json({message: "Invalid Credentials"})

    const validPassword = bcrypt.compareSync(password, existingUser.password);

    if (!validPassword) return res.status(400).json({message: "Invalid Credentials"})

    const user = UserDto(existingUser);
    
    
    const token = jwt.sign(user, JWT_KEY);

    res.json({ user, token });    
})

module.exports = router;