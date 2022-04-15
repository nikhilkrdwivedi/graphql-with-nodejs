import graphql from "graphql";
import Users from "../../model/users.js";
import Contacts from "../../model/contacts.js";
import ContactsTypes from "./contacts.js";
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        isActive: {type: GraphQLBoolean},
        contacts: {
            type:  new GraphQLList(ContactsTypes),
            resolve(parent, args){
                return Contacts.find({userId: parent._id})
            }
        }
    })
});
export default UserType;
