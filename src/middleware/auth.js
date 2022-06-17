const jwt = require('jsonwebtoken')
const  asyncHandler= require('./async')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User')

// auth route
exports.auth = asyncHandler(async (req, res, next) => {
    let token;

    // set token from header authorization
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    // set token from cookie
    else if (req.cookies.token) {
        token = req.cookies.token
    }

    if (!token) {
        return next(new ErrorResponse('Unauthorized', 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return next(new ErrorResponse('Unauthorized', 401))
        }

        // not a part of auth, but good for further db queries without params
        const user = await User.findById(decoded.id)
        if (!user) {
            return next(new ErrorResponse('Unauthorized', 401))
        }
        
        req.user = user
        next()
    } catch (error) {
        return next(new ErrorResponse('Unauthorized', 401))
    }
})

// grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorResponse(`User role ${req.user.role} is not authorized to access this route`, 403))
        }
        next()
    }
}