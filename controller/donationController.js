const Donation = require('../models/donationModel');

exports.submitForm = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
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