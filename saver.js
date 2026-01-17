const fs = require("fs");

function saveToken(data) {
  fs.writeFileSync("data/token.json", JSON.stringify(data, null, 2));
}

module.exports = {
  saveToken
};
