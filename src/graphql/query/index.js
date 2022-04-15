import graphql from "graphql";
import userQuery from "./user.js";
import contactQuery from "./contact.js";
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;
export const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
       ...userQuery,
       ...contactQuery
    }
 });

export default RootQuery;