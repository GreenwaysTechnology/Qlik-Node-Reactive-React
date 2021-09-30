const fs = require('fs')

function blockMe(message) {
    console.log(message);
}

const filePath = './src/assets/info.txt'
const fileOptions = {
    encoding: 'utf-8'
}

blockMe('start reading')
//runs inside worker pool thread but which blocks main thread
const fileContent = fs.readFileSync(filePath, fileOptions)
console.log(fileContent)
blockMe('start ending')