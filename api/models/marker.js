const mongoose = require('mongoose')

const markerSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        default: Date.now  // default value is the current timestamp
    }
})

markerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Marker', markerSchema)