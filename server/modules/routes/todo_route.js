const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );

// routes with logic

// GET
router.get( '/', ( req, res )=>{
    console.log( 'todo_route GET');
    let queryString = `SELECT * FROM "todo"`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })// end pool query
})// end GET

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
    })// end pool query
})// end POST

// UPDATE
router.put( '/:id', ( req, res )=>{
    console.log( 'todo_route PUT:', req.params );
    let queryString = `UPDATE "todo" SET "completed"=true WHERE "id"=$1;`;
    pool.query( queryString, [req.params.id] ).then( (results)=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

// DELETE
router.delete( '/:id', ( req, res )=>{
    console.log( 'todo_route DELETE:', req.params );
    let queryString = `DELETE FROM "todo" WHERE "id"=$1;`;
    pool.query( queryString, [req.params.id] ).then( (results)=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

module.exports = router;