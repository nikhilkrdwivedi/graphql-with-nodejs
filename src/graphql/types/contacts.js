import graphql from "graphql";
import Users from "../../model/users.js";
import Contacts from "../../model/contacts.js";
import UserType from "./users.js";
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;

export const ContactsTypes = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        _id: { type: GraphQLID },
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        userId: {type: GraphQLID},
        isActive: {type: GraphQLBoolean},
        user: {
            type: UserType,
            resolve(parent, args){
                return Users.findById(parent.userId)
            }
        }
    })
});
export default ContactsTypes;