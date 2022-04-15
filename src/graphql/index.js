
import graphql from 'graphql';
import RootQuery from './query/index.js';
import Mutation from './mutation/index.js';
export default new graphql.GraphQLSchema({
   query: RootQuery,
   mutation: Mutation
});