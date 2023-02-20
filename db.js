// Connecting to postgress database
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "123",
  host: 5432,
  database: "postgres_todo",
});
