const gql = require("graphql-tag");

const query = 'repo:vuejs/vue-requests';
const stars = "2500";
const x = `{
  search(query: "${query} stars:>${stars}", type: REPOSITORY, first: 100) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          descriptionHTML
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
}`
module.exports = gql(x);

