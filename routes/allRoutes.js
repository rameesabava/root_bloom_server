const express = require('express')
const userController = require('../controllers/userController')
const plantController = require('../controllers/plantController')
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

// -------------------------user------------------------------------
// get plants
router.get('/plants', jwtMiddleware, plantController.getAllPlantsController)

// view plant
router.get('/plant/:id', jwtMiddleware, plantController.viewPlantController)


module.exports = router