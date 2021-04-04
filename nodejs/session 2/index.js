const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {

    try {
        throw new Error("Something Went Wrong");
    } catch(err) {
        saveError(err);
    }
    res.end()
})

function saveError(err) {
    if (!fs.existsSync('./log')) {
        fs.writeFileSync('./log', '')
        fs.appendFileSync('./log','=============================================================\n')
        fs.appendFileSync('./log', new Date().toISOString() + '\n')
        fs.appendFileSync('./log', err.stack + '\n')
    }

    fs.appendFileSync(
      "./log",
      "=============================================================" + "\n"
    );
    fs.appendFileSync("./log", new Date().toISOString() + "\n");
    fs.appendFileSync("./log", err.stack + "\n");
}

app.listen(3000)