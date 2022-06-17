const express = require('express');

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampInRadius } = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp')

// Include other resource routers
const courseRouter = require('./courses')
const reviewRouter = require('./reviews')

const router = express.Router();

const { auth, authorize } = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter)
router.use('/:bootcampId/reviews', reviewRouter)


router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampInRadius)

router
    .route('/')
    .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
    .post(auth,authorize('publisher','admin'),createBootcamp)


router
    .route('/:bootcampId')
    .get(getBootcamp)
    .patch(auth,authorize('publisher','admin'),updateBootcamp)
    .delete(auth,authorize('publisher','admin'), deleteBootcamp)


module.exports = router;