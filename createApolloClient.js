const ApolloBoost = require('apollo-boost');
const ApolloClient = ApolloBoost.default;
const getToken = require("./token");
const fetch = require('node-fetch');

module.exports = function createApolloClient() {
  return new ApolloClient({
    uri: 'https://api.github.com/graphql',
    fetch,
    request: async (operation) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      });
    },
  });
}
