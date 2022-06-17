const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add the title for review'],
        maxlength: [25, 'Title can not be more than 25 characters']
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add the description'],
        maxlength: [500, 'Description can not be more than 500 characters']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, 'Please give a rating between 1 and 10'],
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
})

// prevent users from submitting more than 1 review per bootcamp
ReviewSchema.index({ bootcamp: 1, user: 1 }, { unique: true })

// static method to get average rating and save
ReviewSchema.statics.getAverageRating = async function(bootcampId) {

    const obj = await this.aggregate([
        {
            $match: { bootcamp: bootcampId }
        },
        {
            $group: {
                _id: '$bootcamp',
                averageRating: { $avg: '$rating' }
            }
        }
        
    ])
    // calling one model from another
    try {
        await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
            averageRating: obj[0].averageRating
        })
    } catch (err) {
        console.error(err)
    }
}

// call getAverageCost after save
ReviewSchema.post('save', function() {
    this.constructor.getAverageRating(this.bootcamp)
})
// call getAverageCost before remove
ReviewSchema.pre('remove', function() {
    this.constructor.getAverageRating(this.bootcamp)
})


module.exports = mongoose.model('Review', ReviewSchema)