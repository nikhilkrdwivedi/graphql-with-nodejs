import graphql from "graphql";
import userMutations from "./user.js";
import contactMutations from "./contact.js";

const { GraphQLObjectType } = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...userMutations,
        ...contactMutations
    }
 });

export default Mutation;