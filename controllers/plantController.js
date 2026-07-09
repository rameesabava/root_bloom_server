const plants = require('../models/plantModel')

// add plant
exports.addPlantController = async (req, res) => {
    console.log("Inside addPlantController");
    const { name, category, price, stock, description, image, size, height, potSize, sunlight, watering, humidity, temperature, fertilizer } = req.body
    const uploadimage = req.file?req.file.filename:image
    const plantDetails = await plants.create({ name, category, price, stock, description, image:uploadimage, size, height, potSize, sunlight, watering, humidity, temperature, fertilizer })
    res.status(200).json(plantDetails)
}

// get plants
exports.getAllPlantsController = async (req,res)=>{
    console.log("Inside getAllPlantsController");
    const allPlants = await plants.find()
    res.status(200).json(allPlants)
}

// view plant
exports.viewPlantController = async (req,res)=>{
    console.log("Inside viewPlantController");
    const {id} = req.params
    const plantDetails = await plants.findById({_id:id})
    res.status(200).json(plantDetails)
}