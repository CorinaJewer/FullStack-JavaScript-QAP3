const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = pool;

/*const pool = new Pool({
  user: 'corina',
  host: 'localhost',
  database: 'qap3',
  password: 'corina',
  port: 5432,
});*/