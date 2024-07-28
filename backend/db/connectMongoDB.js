const mongoose = require('mongoose')


const connectMongoDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/....')

        if (connection) 
        {
            console.log('Database is successfully connected')
        }
    } catch (error) {
        console.log({message: error.message})
    }
}

module.exports = connectMongoDB;