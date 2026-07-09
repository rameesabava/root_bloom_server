const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 1,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    potSize: {
        type: String,
        required: true
    },
    sunlight: {
        type: String,
        required: true
    },
    watering: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    fertilizer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const plants = mongoose.model("plants", plantSchema)
module.exports = plants