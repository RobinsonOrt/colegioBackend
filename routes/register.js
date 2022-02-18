const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const nodemailer = require('../config/nodemailer.config');

const schemaRegister = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    rol: Joi.string().required(),
    studentAccept: Joi.string()
})

router.post('/register', async(req, res)=>{

    const {error} = schemaRegister.validate(req.body)
    if (error){
        return res.status(200).json({"error": "No se pudo crear el usuario, el email no cumple con los requisitos", "status": "400","errorMsg": "Email no existente"})
    }

    const repeatEmail = await User.findOne({email: req.body.email})
    if(repeatEmail) return res.status(200).json({"error": "No se pudo crear el usuario, puede que ya esté registrado", "status": "400","errorMsg": "Ya registrado"})

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
        rol: req.body.rol,
        studentAccept: req.body.studentAccept
    })

    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })
        
        if(req.body.rol!=1){
            nodemailer.sendConfirmationEmail(
                req.body.name,
                req.body.email,
                req.body.password
            )
        }
        
    } catch (error) {
        res.status(500).json({"error": "Presentamos un error, intente mas tarde", "status": "500","errorMsg": "Presentamos un error"})
        return res;
    }

    
})

module.exports = router;