const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../models/Bootcamp');
const geocoder = require('../utils/geocoder');

/**
 * @desc Fetches all bootcamps
 * @access public   role["ALL"]
 * @route GET  /api/v1/bootcamps
 */
exports.getBootcamps = asyncHandler(async (req, res) => {

    res.json(res.advancedResults)
})

/**
 * @desc Fetches a bootcamp
 * @access public   role["ALL"]
 * @route GET  /api/v1/bootcamps/:bootcampId
 */
exports.getBootcamp = asyncHandler(async (req, res, next) => {

     const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.bootcampId} not found`, 404))
        }
        res.json({
            success: true,
            data: bootcamp
        })
})


/**
 * @desc Creates a bootcamp
 * @access public   role["PUBLISHER , ADMIN"]
 * @route POST  /api/v1/bootcamps
 */
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

/**
 * @desc Updates a bootcamp
 * @access private   role["PUBLISHER , ADMIN"]
 * @route PATCH  /api/v1/bootcamps/:bootcampId
 */
exports.updateBootcamp = asyncHandler(async (req, res, next) => {

     let bootcamp = await Bootcamp.findById(req.params.bootcampId)
        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.bootcampId} not found`, 404))
        }
        // make sure user is bootcamp owner
        if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return next(new ErrorResponse(
                `User ${req.user.id} is not authorized to update this bootcamp`,
                401
            ))
        }

        bootcamp = await Bootcamp.findByIdAndUpdate(req.params.bootcampId, req.body, {
            new: true,
            runValidators: true
        })
        res.json({
            success: true,
            data: bootcamp
        })
})


/**
 * @desc Deletes a bootcamp
 * @access private   role["PUBLISHER , ADMIN"]
 * @route DELETE  /api/v1/bootcamps/:bootcampId
 */
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {

        const bootcamp = await Bootcamp.findById(req.params.bootcampId)

        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id ${req.params.bootcampId} not found`, 404))
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

/**
 * @desc Get bootcamps within a radius (in miles)
 * @access private   role["PUBLISHER , ADMIN"]
 * @route GET api/v1/bootcamps/radius/:zipcode/:distance
 */
exports.getBootcampInRadius = asyncHandler(async (req, res) => {

    const { zipcode, distance } = req.params;

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
