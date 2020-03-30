const createApolloClient = require('./createApolloClient');
const query = require('./query');

(async () => {
  const client = await createApolloClient();
  const result = await client.query({query, fetchPolicy: 'network-only'});
  const pretty = result.data.search.edges.map(r => {
    return {
      name: `${r.node.owner.url}/${r.node.name}`,
      description: r.node.descriptionHTML,
      stargazers: r.node.stargazers.totalCount,
      cursor: r.cursor
    }
  });
  console.log(result.data.search.repositoryCount);
  // console.warn(JSON.stringify(result.data, null, 2));
  console.log(JSON.stringify(pretty, null, 2));
})();
