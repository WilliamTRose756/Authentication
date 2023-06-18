import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET, {
        expiresIn: '30d',
})

res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // If not in development, require https
    sameSite: 'strict', // Protection against CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000 // Determines expiration time. Equivalent to 30 days
})

}


export default generateToken