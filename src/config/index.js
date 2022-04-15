
// Export the config object 
export const config = {
    PORT: process.env.PORT || 3000,
    mongoURI: process.env.mongoURI || 'mongodb://127.0.0.1:27017/graphql-demo',
    mongoOptions : {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export default config;