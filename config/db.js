const mongoose = require('mongoose')
require('dotenv').config({ path: './config.env'})

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})
// for production exclude below
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`MongoDB connected: ${db.host}`.cyan.underline.bold);
});

