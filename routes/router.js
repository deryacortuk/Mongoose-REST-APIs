const express = require('express')

const userController = require('../controllers/userController')
const taskController = require('../controllers/taskController')

const router = express.Router()

router.post('/users', userController.postUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.patch('/user/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)



router.post('/tasks', taskController.postTask)
router.get('/tasks', taskController.getTasks)
router.get('/task/:id', taskController.getTask)
router.patch('/task/:id', taskController.updateTask)
router.delete('/tasks/:id', taskController.deleteTask)


module.exports = router;