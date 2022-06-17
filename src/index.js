const path = require('path')
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors')
const errorHandler = require('../src/middleware/error');
// const connectDB = require('../config/db');

// Load env variables
// can also do it with env-cmd package in package.json file
dotenv.config({ path: './config/config.env'})
require('../config/db');

//connect to database
// connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses')
const auth = require('./routes/auth')
const users = require('./routes/users')
const reviews = require('./routes/reviews')



const app = express();

// middlewares

app.use(express.json());

app.use(cookieParser())
// sanitize data
app.use(mongoSanitize())

// set security headers
// const scriptSources = ["'self'", "'unsafe-inline'", "'unsafe-eval'"];
app.use(helmet({
    contentSecurityPolicy: false
}))

// prevent xss atacks
app.use(xss())

// rate limiting
const limiter = rateLimit({
    windowMs: 10*60*1000, // 10 mins
    max: 100
})
app.use(limiter)

// prevent http param pollution
app.use(hpp())

// Enable CORS
app.use(cors())

// set static folder
app.use(express.static(path.join(__dirname, 'public')))



// Mount Routers
app.use('/api/v1/bootcamps',bootcamps);
app.use('/api/v1/courses', courses)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/reviews', reviews)


app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(
     PORT,
     console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err) => {
    console.error(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
})