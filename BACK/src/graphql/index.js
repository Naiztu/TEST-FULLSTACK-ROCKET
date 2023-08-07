import { typeDefs } from "./typDefs.js";
import { resolvers } from "./resolvers.js";
import { ApolloServer } from "@apollo/server";

export const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
