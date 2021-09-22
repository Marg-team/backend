const Donation = require('../models/donationModel');
const UserModel = require('../models/userModel')

exports.submitForm = async (req, res) => { 
    try{
        const newDonationForm = await Donation.create(req.body);

        res.status(201).json({
            status: 'success',
            donationForm: newDonationForm,
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
        const donations = await Donation.find().populate()
        res.status(200).json({
            status: 'success',
            donationForm: donations,
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

        const donations = await Donation.find({assignedTo: user.ngoRef}).populate()
        res.status(200).json({
            status: 'success',
            donationForm: donations,
        });
    }catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.getAllFormVolunteer = async (req, res) => { 
    try{
        const donations = await Donation.find({$or:[{status: 0}, {status: null}]}).populate();
        res.status(200).json({
            status: 'success',
            donationForm: donations,
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
        const donation = await Donation.findOne({
            _id: req.params.id,
        });
        res.status(200).json({
            status: 'success',
            donationForm: donation,
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

        if(status===1){
            const assignedTo = req.body.assignedTo;
            if(!assignedTo){
                new Error('Assigned to is not passed');
            }
            const donation = await Donation.updateOne({_id: req.params.id}, {status: 1, assignedTo: assignedTo});
        }else{
            const donation = await Donation.updateOne({_id: req.params.id}, {status: status, assignedTo: null});
        }
        res.status(201).json({
            status: 'success',
            donationForm: donation,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}