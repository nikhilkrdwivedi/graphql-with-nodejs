import UserType from "../types/users.js";
import ContactsTypes from "../types/contacts.js";
import Users from "../../model/users.js";
import Contacts from "../../model/contacts.js";
import graphql from "graphql";
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;
export const contactQuery = {
    contact: {
        type: ContactsTypes,
        args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(parent, args) {
            return Contacts.findById(args._id);
        }
    },
    contacts:{
        type: new GraphQLList(ContactsTypes),
        resolve(parent, args) {
            return Contacts.find({isActive:true});
        }
    }
}
export default contactQuery;