// create a pool connection for db
const pg = require( 'pg' );

// configure for our db connection
const pool = new pg.Pool({
    database: "todo-list",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 25000
});

// export
module.exports = pool;