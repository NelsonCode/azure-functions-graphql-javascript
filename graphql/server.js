const { ApolloServer } = require("apollo-server-azure-functions");
const { typeDefs } = require("./typedefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

exports.server = server;
