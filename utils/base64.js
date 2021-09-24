const fs = require('fs').promises
const { 
    v1: uuidv1
  } = require('uuid');

const uploadFile = async (file, oldfilename) =>{
    try{
        let b64 = file.split(';base64,');
        const ext = oldfilename.split('.').at(-1)
        const filename = uuidv1()+'.'+ext;
        await fs.writeFile('public/upload/'+ filename, b64[1], {encoding: 'base64'});
        return 'upload/'+filename;
    } catch(err) {
        console.log(err)
        return '';
    }
}

module.exports = uploadFile;