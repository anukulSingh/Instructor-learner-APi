const advancedResults = (model, populate) => async (req,res, next) => {
    
    let query;
        // copy req.query
        const reqQuery = {...req.query}

        // fields need to be excluded
        const removeFields = ['select', 'sort', 'page', 'limit']
        removeFields.forEach(param => delete reqQuery[param])

        // create query string
        let querystr = JSON.stringify(reqQuery)
        
        // create operators $gt ,$gte etc
        querystr = querystr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

        query = model.find(JSON.parse(querystr))

        // select fields
        if (req.query.select) {
            const fields = req.query.select.split(',').join(' ')
            query = query.select(fields)
        }

        // sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            query = query.select(sortBy)
        } else {
            query = query.sort('-createdAt')
        }

        // pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 25;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await model.countDocuments(JSON.parse(querystr))

        query = query.skip(startIndex).limit(limit)

        if (populate) {
            query = query.populate(populate)
        }

        const results = await query;

        // Pagination result
        const pagination = {}

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            }
        }
        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            }
        }
        res.advancedResults = {
            success: true,
            count: results.length,
            pagination,
            data: results
        }
        next()
}
module.exports = advancedResults