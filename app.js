const config = require("./config");
const token = require("./token");
const saver = require("./saver");

async function startApp() {
  console.log("Web3 Token Supply Viewer Started");

  const contract = config.tokenContract;
  const data = await token.getTokenInfo(contract);

  saver.saveToken(data);

  console.log("Token Contract:", contract);
  console.log("Total Supply:", data.totalSupply);
}

startApp();
