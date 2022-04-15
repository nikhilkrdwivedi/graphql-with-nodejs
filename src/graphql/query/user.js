import UserType from "../types/users.js";
import ContactsTypes from "../types/contacts.js";
import Users from "../../model/users.js";
import Contacts from "../../model/contacts.js";
import graphql from "graphql";
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;
const userQuery = {
    user:{
        type: UserType,
        args: { _id: { type: GraphQLID } },
        resolve(parent, args) {
            return Users.findById(args._id);
        }
    },
    users:{
        type: new GraphQLList(UserType),
        resolve(parent, args) {
            return Users.find({});
        }
    }
}

export default userQuery;