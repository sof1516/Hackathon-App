import mongoose from 'mongoose';


export const connectMongoDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/tracker')

        if (connection) 
        {
            console.log('Database is successfully connected')
        }
    } catch (error) {
        console.log({message: error.message})
    }
}

