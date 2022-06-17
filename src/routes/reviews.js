const express = require('express')

const { getReviews, getReview, addReview, updateReview, deleteReview } = require('../controllers/reviews')

const Review = require('../models/Review')


const router = express.Router({ mergeParams: true })

const { auth, authorize } = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')


router.route('/')
    .get(advancedResults(Review, {
        path: 'bootcamp',
        select: 'name description'
    }),
     getReviews
    )
    .post(auth, authorize('user', 'admin'), addReview)


router.route('/:id')
    .get(getReview)
    .patch(auth, authorize('user', 'admin'), updateReview)
    .delete(auth, authorize('user', 'admin'), deleteReview)

module.exports = router