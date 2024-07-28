const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcryptjs')

//import schema
const userCollection = require('../schema')

const router = express.Router()


router.post('/register', (req, res) => {
    try {
        const newUser = req.body

        const dbQuery = await userCollection.findOne({email: newUser.email})

        if (dbQuery)
        {
            return res.status(404).json({message: 'email already in use'})
        }

        if (newUser.password < 8)
        {
            return res.status(400).json({message: "Password must be at least 8 characters long."})
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newUser.password, salt)

        //updated password
        newUser.password = hashedPassword

        if (!hashedPassword)
        {
            return res.status(500).json({ message: "Failed to hash password." });
        }
        //if needed we can generate token here
        const createUser = userCollection.create(newUser)

        res.status(200).json({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            id: createUser.id
        })
        //or we can just return
        res.status(200).json({
            message: "Successfully registered"
        })
    }
    catch (error) {
        console.log(error)
        //if necessary send it through a response
    }
} )

