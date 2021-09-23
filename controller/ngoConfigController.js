const ngoModel = require("../models/ngoModel");

exports.activeNgo = async (req, res) => {
    try{
        const ngoId = req.params.id;

        if(!ngoId){
            throw new Error('Ngo not found')
        }
        
        const ngo = await ngoModel.updateOne({_id: req.params.id}, {activated: true, disabled: false});
        res.status(201).json({
            status: 'success',
            ngo: ngo,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.deactiveNgo = async (req, res) => {
    try{
        const ngoId = req.params.id;

        if(!ngoId){
            throw new Error('Ngo not found')
        }
        
        const ngo = await ngoModel.updateOne({_id: req.params.id}, {activated: false, disabled: true});
        res.status(201).json({
            status: 'success',
            ngo: ngo,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.allPendingNgo = async (req, res) => {
    try{
        const ngo = await ngoModel.find(
            {$or: [
                {activated: false, disabled: false},
                {activated: null, disabled: null},
                {activated: null, disabled: false},
                {activated: false, disabled: null},
            ]}
        ).populate();
        res.status(201).json({
            status: 'success',
            deactivatedNgo: ngo,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

exports.allActivatedNgo = async (req, res) => {
    try{
        const ngo = await ngoModel.find({activated: true}).populate();
        res.status(201).json({
            status: 'success',
            deactivatedNgo: ngo,
        });
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}