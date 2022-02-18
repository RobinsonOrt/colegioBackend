const jwt = require('jsonwebtoken');

const verifyTokenStudent = (req, res, next)=>{
    const token = req.header('auth-token')
    const rol = req.header('rol')
    if(!token || rol != 2) return res.status(401).json({ error: 'Acceso denegado' })

    var secretWord;
    if(rol==1){
        secretWord = process.env.JWT_SECRET_DIR;
    }else if(rol==2){
        secretWord = process.env.JWT_SECRET_STU;
    }

    try {
        const verifyT = jwt.verify(token, secretWord)
        req.user = verifyT
        next()
    } catch (error) {
        res.status(400).json({error: 'Token no valido'})
    }
}

module.exports = verifyTokenStudent;