// init project
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');


const app = express();


const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204



app.get('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));


app.post('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: false
}));

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
}); 