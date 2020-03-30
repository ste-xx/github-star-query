const createApolloClient = require('./createApolloClient');
const query = require('./query');

(async () => {
  const client = await createApolloClient();
  const result = await client.query({query, fetchPolicy: 'network-only'});

  console.warn(JSON.stringify(result.data, null, 2));
})();
