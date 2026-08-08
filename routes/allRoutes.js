const express = require('express')
const userController = require('../controllers/userController')
const plantController = require('../controllers/plantController')
const cartController = require('../controllers/cartController')
const orderController = require('../controllers/orderController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// -------unauthorised-------------------------
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)

// -------------------admin----------------------------------------
// add plant
router.post('/plants/add',adminMiddleware,multerMiddleware.single('image'), plantController.addPlantController)

// get all users
router.get('/users', adminMiddleware, userController.getAllUsersController)

// get all orders
router.get('/orders', adminMiddleware, orderController.getAllOrdersController)

// view order
router.get('/order/:id', adminMiddleware, orderController.viewOrderController)

// update order status
router.put('/order/status/:id', adminMiddleware, orderController.updateOrderStatusController)


// -------------------------user------------------------------------
// get plants
router.get('/plants', jwtMiddleware, plantController.getAllPlantsController)

// view plant
router.get('/plant/:id', jwtMiddleware, plantController.viewPlantController)

// add plant to cart
router.post('/cart/add',jwtMiddleware, cartController.addToCartController)

// get cart items
router.get('/cart', jwtMiddleware, cartController.getCartController)

// incremet quantity
router.put('/cart/increment/:cartId', jwtMiddleware, cartController.incrementQuantityController)

// decremet quantity
router.put('/cart/decrement/:cartId', jwtMiddleware, cartController.decrementQuantityController)

// remove cart item
router.delete('/cart/remove/:cartId', jwtMiddleware, cartController.removeCartItemController)

// remove all cart items
router.delete('/cart/remove', jwtMiddleware, cartController.removeAllCartItemsController)

// add order
router.post('/order/add',jwtMiddleware, orderController.addOrderController)


module.exports = router