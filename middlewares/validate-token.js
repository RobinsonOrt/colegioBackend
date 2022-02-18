const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const token = req.header('auth-token')
    const rol = req.header('rol')
    if(!token || rol != 1) return res.status(401).json({ error: 'Acceso denegado', status: 401, errorMsg: 'No Autorizado'})
    var secretWord;

    try {
        const verifyT = jwt.verify(token, process.env.JWT_SECRET_DIR)
        req.user = verifyT
        next()
    } catch (error) {
        res.status(401).json({error: 'Acceso denegado', status: 401, errorMsg: 'No Autorizado'})
    }
}

module.exports = verifyToken;