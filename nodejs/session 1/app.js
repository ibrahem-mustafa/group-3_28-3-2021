const http = require("http");
const fs = require("fs");

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// write file
// fs.writeFile('./note.txt', 'welcome Home', (err) => {
//     console.log(err)
// })

// const result = fs.writeFileSync('./note2.txt', 'Hello From NodeJs Again')
// console.log(result)

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// fs.appendFileSync('./note.txt', '\n Hello From Append File Method')

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// read file
// const note = fs.readFileSync('./note.txt')
// const note = fs.readFileSync('./note.txt', {encoding: 'utf8'})
// console.log(note)

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// delete file
// fs.unlink('./note2.txt', (err) => {
//     if (err) {
//         console.log(err)

//     }
// })

// try {
//     fs.unlinkSync("./note2.txt");
// } catch(err) {
//     console.log(err)
// }

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// create directory
// fs.mkdirSync('./test')

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// delete directory
// fs.rmdirSync('./test')

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// check if directory exists
// const folderExist = fs.existsSync('./test')

// if (folderExist) {
//     fs.rmdirSync("./test");
// } else {
//     console.log('Folder Dose Not Exist')
// }

// **  */ ////////////////////////////////////////////////////////////////////// ** /////

// /main.js

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    sendFile("./pages/index.html", res);
  } else if (url === "/contact") {
    sendFile("./pages/contact.html", res);
  } else if (url === "/about") {
    sendFile("./pages/about.html", res);
  } else if (url === "/main.js") {
    sendFile("./pages/main.js", res);
  } else if (url == "/todos") {
    sendFile('./todosManager/index.html', res)
  } else if (url == '/todoManagerJs') {
    sendFile("./todosManager/app.js", res);
  }else if (url === "/todosData") {
    const todos = [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
      },
    ];
    res.end(JSON.stringify(todos))
  } else {
    sendFile("./pages/404.html", res);
  }

});


function sendFile(path, res) {
  try {
    if (!fs.existsSync(path)) {
      return res.end('not Found')
    }
    const file = fs.readFileSync(path)
    res.end(file)
  } catch (err) {
    console.log(err)
    res.end("not Found");
  }
}

app.listen(3000);

