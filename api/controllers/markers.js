const markersRouter = require('express').Router()
const Marker = require('../models/marker')

// get test data
markersRouter.get('/test', async (request, response) => {
    response.status(200).json({test: 'test successful'})
})

// get all data
markersRouter.get('/', async (request, response, next) => {
    try {
        const markers = await Marker.find({})
        response.status(200).json(markers)
    } catch (exception) {
        next(exception)
    }
})

// post a new marker
markersRouter.post('/', async (request, response, next) => {
    const body = request.body  // get the body from the request

    // creates a new instance of the Marker model
    const marker = new Marker({
        lat: body.lat,
        lng: body.lng,
        datetime: body.datetime
    })

    try {
        const savedMarker = await marker.save()
        response.status(201).json(savedMarker)
    } catch (exception) {
        next(exception)
    }
})

module.exports = markersRouter