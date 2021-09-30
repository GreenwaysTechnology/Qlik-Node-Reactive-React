const fs = require('fs')

function blockMe(message){
  console.log(message);
}

const filePath = './src/assets/info.txt'
const fileOptions = {
    encoding:'utf-8'
}

blockMe('start reading')
function sleep(ms){
    const time =  Date.now() + ms;
    while(Date.now() < time);
}
//async/non blocking  file api :
fs.readFile(filePath, fileOptions, (err, data) => {
    if (err) {
        throw err;
    }
    sleep(10000)
    console.log(data);
})

blockMe('start ending')