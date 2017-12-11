const express = require('express');
const graphqlHTTP = require('express-graphql')
const {buildSchema} = require('graphql');
const {typeDefs} = require('./inc/schema.js');
const {root} = require('./inc/resolver.js');

// Type Definition

// Schema
var schema = buildSchema(typeDefs);

// Express App
var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
