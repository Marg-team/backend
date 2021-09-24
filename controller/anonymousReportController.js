const anonymousReport = require('../models/anonymousReportModel');
const uploadFile = require('../utils/base64');

exports.submitForm = async (req, res) => {
    try{

        if(!!req.body.proof){
            const v = await uploadFile(req.body.proof, req.body.filename)
            console.log(v)
            req.body.proof = v;
        }
        
        const newAnonymousReport = await anonymousReport.create(req.body);

        res.status(201).json({
            status: 'success',
            anonymousReport: newAnonymousReport,
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
        const reports = await anonymousReport.find().populate();
        res.status(200).json({
            status: 'success',
            anonymousReport: reports,
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
        const report = await anonymousReport.findOne({
            _id: req.params.id,
        });
        res.status(200).json({
            status: 'success',
            anonymousReport: report,
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
        let donation;

        if(status===1){
            const assignedTo = req.body.assignedTo;
            if(!assignedTo){
                new Error('Assigned to is not passed');
            }
            donation = await anonymousReport.updateOne({_id: req.params.id}, {status: 1, assignedTo: assignedTo});
        }else{
            donation = await anonymousReport.updateOne({_id: req.params.id}, {status: status, assignedTo: null});
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