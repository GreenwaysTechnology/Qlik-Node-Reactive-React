const fs = require('fs')

function blockMe(message){
  console.log(message);
}

const filePath = './src/assets/info.txt'

const fileOptions = {
    encoding:'utf-8'
}

blockMe('start reading')
//async/non blocking  file api : executed by worker pool thread
fs.readFile(filePath, fileOptions, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})
blockMe('start ending')