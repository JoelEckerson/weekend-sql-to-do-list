const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );

// routes with logic

// GET

// POST
router.post( '/', ( req, res )=>{
    console.log( 'todo_route POST:', req.body );
    // add item to the db
    // create quertyString
    let queryString = `INSERT INTO "todo" ( task, completed ) VALUES ( $1, $2 )`;
    // ask pool to run query
    pool.query( queryString, [ req.body.task, req.body.completed ]).then( (results)=>{
        // if successful send 200
        res.sendStatus( 200 );
    }).catch( (err)=>{
        // if not successful send 500
        console.log( err );
        res.sendStatus( 500 );
    })
})

// UPDATE

//DELETE

module.exports = router;