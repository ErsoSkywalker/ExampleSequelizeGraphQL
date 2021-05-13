const { gql } = require("apollo-server");

const typeDefs = gql`
  type response {
    respuesta: String
  }

  type Query {
    getVersionAPI: String
  }

  type Mutation {
    createNewUser: response
  }
`;

module.exports = typeDefs;
