const UserModel = require('../models/userModel')
const express = require('express')

exports.postUser = async(req, res) => {

    const user = new UserModel(req.body)

    try {
        await user.save()
        res.status(201).send(user)

    } catch (error) {
        res.status(400).send(error)

    }
}

//user.save().then(() => {
// res.status(201).send(user)

//  }).catch((error) => {
//   res.status(400).send(error)

// })
//}

exports.getUsers = async(req, res) => {


    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch (error) {

        res.status(500).send(error)
    }

}

exports.updateUser = async(req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send('Invalid updates!')
    }

    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}



exports.getUser = async(req, res) => {
    const _id = req.params.id
    try {
        const user = await UserModel.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.status(201).send(user)

    } catch (error) {
        res.status(500).send(error)

    }
}


exports.deleteUser = async(req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.status(201).send(user)

    } catch (e) {
        res.status(500).send()
    }

}