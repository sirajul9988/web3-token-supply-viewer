async function fetchToken(contract) {
  return {
    totalSupply: Math.floor(Math.random() * 1000000)
  };
}

module.exports = {
  fetchToken
};
