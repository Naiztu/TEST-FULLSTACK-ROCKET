import UserMutations from "./mutations/UserMutations.js";
import UserQueries from "./queries/UserQueries.js";

export const resolvers = {
  Query: {
    ...UserQueries,
  },
  Mutation: {
    ...UserMutations,
  },
  User: {
    dateBirth: (parent) => parent.dateBirth.toISOString().split("T")[0],
  },
};
