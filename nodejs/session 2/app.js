const http = require('http')
const fs = require('fs')
const url = require('url');


const app = http.createServer((req, res) => {


    const reqUrl = url.parse(req.url, true,);

    console.log(reqUrl)
    
    // if (url === '/about' || url === '/about/') {
    //     const file = fs.readFileSync('./about.html')
    //     res.end(file)
    // } else {
    //     res.end('Not Found')
    // }

    res.end()

    

})

app.listen(3000)