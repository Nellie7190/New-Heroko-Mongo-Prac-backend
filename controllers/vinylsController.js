const express = require('express');
const Vinyl = require('./../models/Vinyl')
const router = express.Router();

router.get('/', function (req, res) {
    console.log(Vinyl)
    //Get all the vinyls
    Vinyl.find()
        .then(vinyls => res.status(200).json({vinyls: vinyls}))

})

router.post("/", (req, res) => {
    const data = req.body 
    Vinyl.create(data)
        .then((vinyl) => res.status(201).json({vinyl: vinyl}))
})

router.get('/:id', function(req, res) {
    const id = req.params.id
    Vinyl.findById(id)
        .then(vinyl => res.status(200).json({vinyl: vinyl}))
})

router.delete('/:id', function(req, res) {
    //get id from params
    const id = req.params.id
    //find and delete by id
    Vinyl.findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
})

router.patch('/:id', function(req, res) {
    const id = req.params.id
    //get new vinyl data from body of request
    const data = req.body
        .then(vinyl => res.sendStatus(200).json({vinyl: vinyl}))
})
module.exports = router;