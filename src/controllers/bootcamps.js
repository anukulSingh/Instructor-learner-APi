const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');
const geocoder = require('../utils/geocoder');


// @desc    Get all bootcamps
// @route   GET api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {

    res.json(res.advancedResults)
})

// @desc    Get a bootcamp
// @route   GET api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {

     const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.id} not found`, 404))
        }
        res.json({
            success: true,
            data: bootcamp
        })
})

// @desc Create a new bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {

    req.body.user = req.user.id

    const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id })
    if (publishedBootcamp && req.user.role !== 'admin') {
        return next(new ErrorResponse(`Publisher with id ${req.user.id} has already created a bootcamp`, 400))
    }

    const bootcamp = await Bootcamp.create(req.body);
        res.status(201)
            .json({
                success: true,
                data: bootcamp 
            })
})


// @desc    Update a bootcamp
// @route   PATCH api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {

     let bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.id} not found`, 404))
        }
        // make sure user is bootcamp owner
        if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return next(new ErrorResponse(
                `User ${req.user.id} is not authorized to update this bootcamp`,
                401
            ))
        }

        bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.json({
            success: true,
            data: bootcamp
        })
})



// @desc    Delete a bootcamp
// @route   DELETE api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {

        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.id} not found`, 404))
        }
        if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return next(new ErrorResponse(
                `User ${req.user.id} is not authorized to delete this bootcamp`,
                401
            ))
        }

        bootcamp.remove()
        res.json({
            success: true,
            data: {}
        })  
})


// @desc    Get bootcamps within a radius (in miles)
// @route   GET api/v1/bootcamps/radius/:zipcode/:distance
// @access  Private
exports.getBootcampInRadius = asyncHandler(async (req, res, next) => {

    const { zipcode,distance } = req.params;

    // Get lat/lang from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lang = loc[0].longitude;


    const radius = distance / 3963;

    const bootcamps = await Bootcamp.find({
        location: { $geoWithin: { $centerSphere: [ [ lang, lat ], radius ] } }
    })

    res.json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })

})

// @desc    Upload a boootcamp picture
// @route   PUT api/v1/bootcamps/:id/photo
// @access  Private

// exports.bootcampPhotoUpload = asyncHandler()
