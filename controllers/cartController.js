const carts = require('../models/cartModel')
const plants = require('../models/plantModel')

// add to cart
exports.addToCartController = async (req, res) => {
    console.log("Inside addToCartController");
    const userMail = req.payload
    const { plantId } = req.body
    const plant = await plants.findById(plantId)
    if (plant) {
        const existingPlant = await carts.findOne({ userMail, plantId })
        if (existingPlant) {
            existingPlant.quantity += 1
            existingPlant.totalPrice = existingPlant.quantity * existingPlant.price
            await existingPlant.save()
            res.status(200).json(existingPlant)
        } else {
            const newItemCart = await carts.create({ userMail, plantId, quantity: 1, price: plant.price, totalPrice: plant.price })
            res.status(201).json(newItemCart)

        }
    } else {
        res.status(404).json("Plant Not Found")
    }

}