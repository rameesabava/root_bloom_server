const orders = require('../models/orderModel')

// add order
exports.addOrderController = async (req, res) => {
    console.log("Inside addOrderController");

    const userMail = req.payload
    const { username, phone, items, address, totalAmount, paymentMethod } = req.body

    const newOrder = await orders.create({ userMail, username, phone, items, address, totalAmount, paymentMethod })
    res.status(201).json(newOrder)

}

// get all orders with status placed
exports.getAllPlacedOrdersController = async (req,res)=>{
    console.log("Inside getAllPlacedOrdersController");
    const allPlacedOrders = await orders.find({orderStatus:"Placed"}).sort({createdAt:-1})
    res.status(200).json(allPlacedOrders)
}

// to view single order details
exports.viewOrderController = async (req,res)=>{
    console.log("Inside viewOrderController");
    const {id} = req.params
    const orderDetails = await orders.findById({_id:id})
    res.status(200).json(orderDetails)
}