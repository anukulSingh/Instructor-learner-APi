const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');


// @desc Get all users
// @route /api/v1/users
// @access private/admin
exports.getUsers = asyncHandler(async (req, res, next) => {
   res.json(res.advancedResults)
 })

// @desc Get a user
// @route /api/v1/users/:id
// @access private/admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id)
    res.json({
        success: true,
        data: user
    })
})

// @desc create a user
// @route /api/v1/users
// @access private/admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body)
    res.status(201).json({
        success: true,
        data: user
    })
})


// @desc update a user
// @route PUT /api/v1/users/:id  
// @access private/admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true
    })
    res.json({
        success: true,
        data: user
    })
})

// @desc delete a user
// @route DELETE /api/v1/users/:id
// @access private/admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(201).json({
        success: true,
        data: {}
    })
})

