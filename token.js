const api = require("./api");

async function getTokenInfo(contract) {
  const result = await api.fetchToken(contract);
  return {
    contract: contract,
    totalSupply: result.totalSupply || 0,
    checkedAt: new Date().toISOString()
  };
}

module.exports = {
  getTokenInfo
};
