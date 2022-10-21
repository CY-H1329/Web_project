const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to the DB')
    }catch(e) {
        console.log(e.message);
        process.exit(1);
    }
}

module.exports = connectDB;