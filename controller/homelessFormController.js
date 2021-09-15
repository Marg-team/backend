const homelessFormModel = require("../models/homelessFormModel");

exports.submitForm = async (req, res) => {
    try{
        const newhomelessform = await homelessFormModel.create(req.body);

        res.status(201).json({
            status: 'success',
            homelessform: newhomelessform,
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}


exports.getAllForm = async (req, res) => {
    try{
        const forms = await homelessFormModel.find().populate()
        res.status(200).json({
            status: 'success',
            homelessform: forms,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.getForm = async (req, res) => {
    try{
        const form = await homelessFormModel.findOne({
            _id: req.params.id,
        });
        res.status(200).json({
            status: 'success',
            homelessform: form,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}