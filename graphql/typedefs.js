const { gql } = require("apollo-server-azure-functions");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

exports.typeDefs = typeDefs;
