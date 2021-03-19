// requires go here
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const todo = require( './modules/routes/todo_route' );

// users go here
app.use( express.static( 'server/public' ));
app.use( bodyParser.urlencoded( {extended: true }));
app.use( '/todo', todo );

// globals go here
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})