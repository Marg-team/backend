const homelessFormModel = require("../models/homelessFormModel");
const uploadFile = require("../utils/base64");

exports.submitForm = async (req, res) => {
    try{

        if(!!req.body.proof){
            const v = await uploadFile(req.body.proof)
            console.log(v)
            req.body.proof = v;
        }

        console.log(req.body.proof)

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