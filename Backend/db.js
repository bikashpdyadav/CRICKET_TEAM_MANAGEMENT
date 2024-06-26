const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cricket_management_system",
  password: "12345",
  port: 5432, // Default PostgreSQL port
});

async function connectToPG() {
  try {
    // Get a client from the connection pool
    const client = await pool.connect();
    console.log("Connected to PostgreSQL!");

    // Example query
    const result = await client.query("SELECT NOW() as now");
    console.log("Current time from PostgreSQL:", result.rows[0].now);

    // Release the client back to the pool
    client.release();
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  } finally {
    // Shut down the pool (optional)
    // pool.end();
  }
}

// Call the async function to connect
connectToPG();

module.exports = pool;
