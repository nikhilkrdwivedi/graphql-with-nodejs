
import UserType from "../types/users.js";
import Users from "../../model/users.js";
import graphql from "graphql";
const { GraphQLString, GraphQLNonNull } = graphql;

const userMutations = {
    addUser: {
        type: UserType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString)},
            email: { type: new GraphQLNonNull(GraphQLString) },
            phone: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
            let user = new Users({
                name: args.name,
                email: args.email,
                phone: args.phone
            });
            return user.save();
        }
    }
}
export default userMutations;