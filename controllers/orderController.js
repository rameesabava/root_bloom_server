const orders = require('../models/orderModel')

// add order
exports.addOrderController = async (req, res) => {
    console.log("Inside addOrderController");

    const userMail = req.payload
    const { username, phone, items, address, totalAmount, paymentMethod } = req.body

    const newOrder = await orders.create({ userMail, username, phone, items, address, totalAmount, paymentMethod })
    res.status(201).json(newOrder)

}
