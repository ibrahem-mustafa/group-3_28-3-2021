const fs = require('fs')

function createDirIfNotFound(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

function extractDirPath(path) {
  const splittedPath = path.split("/");
  splittedPath.pop();
  return splittedPath.join("/");
}


module.exports = {
  createDirIfNotFound,
  extractDirPath,
};