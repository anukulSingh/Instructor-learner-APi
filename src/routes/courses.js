const express = require('express')

const { getCourses, getCourse, addCourse, updateCourse, deleteCourse } = require('../controllers/courses')

const Course = require('../models/Course')


const router = express.Router({ mergeParams: true })

const { auth, authorize } = require('../middleware/auth')
const advancedResults = require('../middleware/advancedResults')


router.route('/')
    .get(advancedResults(Course, {
        path: 'bootcamp',
        select: 'name description'
    }),
     getCourses
    )
    .post(auth,authorize('publisher','admin'), addCourse)

router.route('/:id')
    .get(getCourse)
    .put(auth,authorize('publisher','admin'),updateCourse)
    .delete(auth,authorize('publisher','admin'),deleteCourse)

module.exports = router