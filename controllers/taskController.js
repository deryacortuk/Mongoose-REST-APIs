const TaskModel = require('../models/taskModel')

exports.getTasks = async(req, res) => {
    try {
        const tasks = await TaskModel.find({})
        res.status(201).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.postTask = async(req, res) => {
    const task = new TaskModel(req.body)
    try {
        await task.save()
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getTask = async(req, res) => {
    const _id = req.params.id
    try {
        const task = await TaskModel.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.updateTask = async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates!' })
    }

    try {
        const task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }

}

exports.deleteTask = async(req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.status(200).send(task)

    } catch (error) {
        res.status(500).send(error)
    }
}