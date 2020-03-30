const gql = require("graphql-tag");

module.exports = gql(`query {
  viewer {
    gists (first: 100, privacy:ALL, orderBy: {field: CREATED_AT, direction: DESC} ) {
      edges {
        node {
          description
          name
          files {
            name
            text
          }
        }
      }
    }
  }
}`);
