const homelessFormModel = require("../models/homelessFormModel");
const UserModel = require("../models/userModel");
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

exports.getAllFormNGO = async (req, res) => {
    try{
        const user = await UserModel.findOne({_id:req.user._id}).populate()
        if(!user){
            throw new Error("User is not found");
        }
        if(!user.ngoRef){
            throw new Error("User is not an NGO");
        }
        const forms = await homelessFormModel.find({assignedTo: user.ngoRef}).populate()
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

exports.getAllFormVolunteer = async (req, res) => {
    try{
        const forms = await homelessFormModel.find({$or:[{status: 0}, {status: null}]}).populate()
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

exports.statusChange = async (req, res) => {
    try{
        const status = req.params.status;
        let homelessForm;

        if(status===1){
            const assignedTo = req.body.assignedTo;
            if(!assignedTo){
                new Error('Assigned to is not passed');
            }
            homelessForm = await homelessFormModel.updateOne({_id: req.params.id}, {status: 1, assignedTo: assignedTo});
        }else{
            homelessForm = await homelessFormModel.updateOne({_id: req.params.id}, {status: status, assignedTo: null});
        }
        res.status(201).json({
            status: 'success',
            homelessForm: homelessForm,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}