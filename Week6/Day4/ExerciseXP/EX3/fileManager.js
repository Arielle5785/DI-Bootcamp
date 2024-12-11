const fs = require('fs');

function readFile(fileName){
  fs.readFile(fileName, 'utf-8', (error, data ) => {
    if(error){
      console.log('Error Reading the File', error);
      return;
    }
    console.log(`There is the CONTENT of ${fileName}`,data);
  })
}
function writeFile(fileName, content){
fs.writeFile(fileName,content, 'utf-8', (e, data) =>{
  if (e){
    console.log(`Error Writting the File of ${fileName}`, data);
    return;
  }
  console.log(`the file ${fileName} write the content ${content}:`, data);
});
};
module.exports = {
    readFile,
    writeFile,
}
readFile(Bye_World.txt)