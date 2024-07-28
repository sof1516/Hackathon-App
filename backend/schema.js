const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
    
        firstName: {
            type: String,
            require: [true, "first name is mandatory"]
        },

        lastName: {
            type: String,
            require: [true, "last name is mandatory"]
        },

        email: {
            type: String,
            require: [true, "email address is mandatory"]
        },

        password: {
            type: String,
            require: [true, "password is necassary"]
        }
    }
) 

const userCollection = new mongoose.model("userCollection", userSchema)

module.exports = {userCollection}