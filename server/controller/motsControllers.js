const Mots = require('../models/motsModel');
const User = require('../models/userModel');
const fs = require("fs");
const mongoose = require("mongoose");


const getMotsList = async (req, res) => {
    const {id} = req.body
    if(!mongoose.isValidObjectId(id)) return res.status(201).send('Incorrect Mots id')
    const mots = await Mots.findById(id)
        .catch(err => {
            console.log(err)
            res.status(201).send('Could not find the list of word')
        })
    if(!message) return res.status(201).send('Could not find the user')
    res.status(200).json(message)
}

const addMots = async (req, res) => {
    const { id, word } = req.body;
    if(!mongoose.isValidObjectId(id) || !mongoose.isValidObjectId(postID)) return res.status(201).send('Incorrect user or post id');
    await Mots.findById(id)
        .then(response => {
            if (!response) res.status(201).send('Could not find the user')
        })
        .catch(error => {
        console.log(error.message)
        return res.status(201).send('Could not find the user')
    })
    User.findByIdAndUpdate(id, {
        $addToSet: {mots: word}
    }, {new: true})
        .then(response => {
            return res.status(200).json({id: response._id, posts: response.mots})
        })
        .catch(error => {
            res.status(201).send('Could not update the list')
            console.log(error.message)
        })
}