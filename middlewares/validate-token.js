const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const token = req.header('auth-token')
    if(!token) return res.status(401).json({ error: 'Acceso denegado' })

    try {
        const verifyT = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verifyT
        next()
    } catch (error) {
        res.status(400).json({error: 'Token no valido'})
    }
}

module.exports = verifyToken;