const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

router.post('/login', async (req, res) =>{
    const {error} = schemaLogin.validate(req.body)
    if (error){
        return res.json({error: true, mensaje: error.details[0].message})
    }

    const user = await User.findOne({email: req.body.email})
    if(!user) return res.json({error: true, mensaje: 'Email o contraseña incorrectos'})

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.json({error: true, mensaje: 'Email o contraseña incorrectos'})
    var secretWord;
    if(user.rol==1){
        secretWord = process.env.JWT_SECRET_DIR;
    }else if(user.rol==2){
        secretWord = process.env.JWT_SECRET_STU;
    }
    
    const token = jwt.sign({
        name: user.name,
        id: user._id,
        rol: user.rol,
        studentAccept: user.studentAccept
    }, secretWord)

    const userRol = parseInt(user.rol, 10);
    const userName = user.name;
    const studentAccept = user.studentAccept;
    
    res.header('auth-token', token).json({
        error: null,
        data: {token, userRol, userName, studentAccept}
    })
})

module.exports = router;