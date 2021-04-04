// const http = require('http')
const fs = require("fs");
// const url = require('url');

// const app = http.createServer((req, res) => {

//     const reqUrl = url.parse(req.url, true,);

//     console.log(reqUrl)

//     // if (url === '/about' || url === '/about/') {
//     //     const file = fs.readFileSync('./about.html')
//     //     res.end(file)
//     // } else {
//     //     res.end('Not Found')
//     // }

//     res.end()

// })

// app.listen(3000)

// console.log(process.argv)

const { createDirIfNotFound, extractDirPath } = require("./helpers/fs.helper");

const method = process.argv[2];
const path = process.argv[3];

try {
  if (method === "copy") {
    const { from, to } = getFromTo(path);
    copyFileAction(from, to);
  } else if (method === "copyDir") {
    const { from, to } = getFromTo(path);
    copyDirAction(from, to);
  }
} catch (err) {
  handleError(err);
}

function copyDirAction(from, to) {
    
    createDirIfNotFound(to)


    const dirFiles = fs.readdirSync(from)

    dirFiles.forEach(fileName => {
        copyFileAction(from + '/' + fileName, to + '/' + fileName);
    })
}

function copyFileAction(from, to) {
  const toDir = extractDirPath(to);
  createDirIfNotFound(toDir);
  fs.copyFileSync(from, to);
}

function getFromTo(path) {
  const splittedPath = path.split(":");
  const from = splittedPath[0];
  const to = splittedPath[1];

  return { from, to };
}

function handleError(err) {
  console.log("========================");
  console.log("Failed To Proceed Action");
  console.log("========================");
  console.log(err);
  console.log("========================");
}

// copy file from path to path
// delete file based on some conditions
// write files in custom path
