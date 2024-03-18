const Pool = require('pg').Pool
const pool = new Pool({
  user: 'corina',
  host: 'localhost',
  database: 'qap3',
  password: 'corina',
  port: 5432,
});

//if(DEBUG) console.log("connected to PostgreSQL...");

module.exports = pool;