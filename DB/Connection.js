const mongoose = require('mongoose')
// const uri = process.env.URI;
MONGODB_URI = typeof process.env.MONGO_URI === 'string'


const connectDB = async()=>{
    await mongoose.connect(MONGODB_URI);
    console.log('DB connected, and so we begin...')
}

module.exports = connectDB;

