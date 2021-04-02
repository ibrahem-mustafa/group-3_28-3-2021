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

  let data;

  if (url === "/") {
    console.log("Request For Home Page");
    data = fs.readFileSync("./pages/index.html");
  } else if (url === "/contact") {
    console.log("Request For Contact Page");
    data = fs.readFileSync("./pages/contact.html");
  } else if (url === "/about") {
    console.log("Request For About Page");
    data = fs.readFileSync("./pages/about.html");
  } else if (url === "/main.js") {
    data = fs.readFileSync("./pages/main.js");
  } else if (url == "/todos") {
    //   TODO: Send Task Files
  } else if (url === "/todosData") {
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

    //   TODO: Transform JSON data into String
  } else {
    console.log("Request For Anonymous Page");
    data = fs.readFileSync("./pages/404.html");
  }

  res.end(data);
});

app.listen(3000);
