
import ContactsTypes from "../types/contacts.js";
import Contacts from "../../model/contacts.js";
import graphql from "graphql";
const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLBoolean } = graphql;

const contactMutations = {
    addContact:{
        type:ContactsTypes,
        args:{
            name: { type: new GraphQLNonNull(GraphQLString)},
            email: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
            userId: { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve(parent,args){
            let contact = new Contacts({
                name:args.name,
                email:args.email,
                phone:args.phone,
                userId:args.userId
            })
            return contact.save()
        }
    },
    removeContact:{
        type:ContactsTypes,
        args:{
            _id: { type: new GraphQLNonNull(GraphQLID)},
            name: { type: GraphQLString},
            email: { type: GraphQLString},
            phone: { type: GraphQLString},
            userId: { type: GraphQLID},
            isActive: {type: GraphQLBoolean}
        },
        resolve: async (parent,args) => {
            const _id = args;
            const contact = Contacts.findByIdAndUpdate(_id, args,{new:true});
            return contact
        } 
    }
}
export default contactMutations;