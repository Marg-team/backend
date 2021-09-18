const anonymousReport = require('../models/anonymousReportModel');

exports.submitForm = async (req, res) => {
    try{
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