const fs = require('fs').promises
const { 
    v1: uuidv1
  } = require('uuid');

const uploadFile = async (file) =>{
    let b64 = file.split(';base64,');
    try{
        await fs.writeFile('public/upload/'+uuidv1()+'.'+b64[0].split('/')[1], b64[1], {encoding: 'base64'});
        return 'upload/'+uuidv1()+'.'+b64[0].split('/')[1];
    } catch(err) {
        console.log(err)
        return '';
    }
}

module.exports = uploadFile;