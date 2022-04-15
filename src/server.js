import express from 'express';
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/index.js';
import {config} from './config/index.js';
const app = express();

const loggingMiddleware = (req, res, next) => {
    /**
     * You can put your login here
     */
    next();
}

app.use('/graphql', loggingMiddleware, graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/',(req,res)=>{
    return res.status(200).json({successMsg:`Server is running and current timestamp ${new Date()}`})
});

const startApp = async () => {
    try {
        // Connection With DB
        mongoose.connect(config.mongoURI, config.mongoOptions);
        console.log(`Mongoose default connection is open to ${config.mongoURI}`);

        // Start Listening for the server on PORT
        app.listen(config.PORT, () =>
        console.log(`Server started on PORT ${config.PORT} `)
        );
    } catch (err) {
        console.log(`Mongoose default connection has occurred ${err} error`);
        startApp();
    }
}

await startApp();