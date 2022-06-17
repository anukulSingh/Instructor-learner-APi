const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Course = require('../models/Course');
const Bootcamp = require('../models/Bootcamp');


/**
 * @desc Get all courses
 * @access public   role["ALL"]
 * @route  GET api/v1/courses
 * @route  GET api/v1/bootcamps/:bootcampId/courses
 */
exports.getCourses = asyncHandler(async (req, res) => {

    if (req.params.bootcampId) {
        const courses = await Course.find({ bootcamp: req.params.bootcampId })

        return res.json({
            success: true,
            count: courses.length,
            data: courses
        })
    }
    else {
        res.json(res.advancedResults)
    }
})


/**
 * @desc Get a course
 * @access public   role["ALL"]
 * @route  GET api/v1/courses/:courseId
 */
exports.getCourse = asyncHandler(async (req, res, next) => {
    
    const course = await Course.findById(req.params.courseId).populate({
        path: 'bootcamp',
        select: 'name description'
    })

    if (!course) {
        return next(new ErrorResponse(`Resource with id ${req.params.courseId} not found`, 404))
    }

    res.json({
        success: true,
        data: course
    })
})


/**
 * @desc Add a course
 * @access private   role["PUBLISHER", "ADMIN"]
 * @route  POST api/v1/bootcamps/:bootcamId/courses
 */
exports.addCourse = asyncHandler(async (req, res, next) => {

    req.body.bootcamp = req.params.bootcampId
    req.body.user = req.user.id
    
    const bootcamp = await Bootcamp.findById(req.params.bootcampId)

    if (!bootcamp) {
        return next(new ErrorResponse(
            `No bootcamp with id ${req.params.bootcampId}`,
            404
        ))
    }
        // make sure user is bootcamp owner
    if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(new ErrorResponse(
            `User ${req.user.id} is not authorized to add a course to bootcamp ${bootcamp._id}`,
            401
        ))
    }

    const course = await Course.create(req.body)

    res.json({
        success: true,
        data: course
    })
})


/**
 * @desc Update a course
 * @access private   role["PUBLISHER", "ADMIN"]
 * @route  POST api/v1/courses/courseId
 */
exports.updateCourse = asyncHandler(async (req, res, next) => {

    
    let course = await Course.findById(req.params.id)

    if (!course) {
        return next(new ErrorResponse(
            `No bootcamp with id ${req.params.id}`,
            404
        ))
    }
    // make sure user is course owner
    if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(new ErrorResponse(
            `User ${req.user.id} is not authorized to update course ${course._id}`,
            401
        ))
    }
    

    course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.json({
        success: true,
        data: course
    })
})



// @desc    Delete a course
// @route   DELETE api/v1/courses/:id
// @access  Private

exports.deleteCourse = asyncHandler(async (req, res, next) => {

    
    const course = await Course.findById(req.params.id)

    if (!course) {
        return next(new ErrorResponse(
            `No course with id ${req.params.id}`,
            404
        ))
    }
    // make sure user is course owner
    if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
        return next(new ErrorResponse(
            `User ${req.user.id} is not authorized to delete course ${course._id}`,
            401
        ))
    }

    await course.remove()

    res.json({
        success: true,
        data: {}
    })
})

