import mysql from "mysql";

// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'sa',
    password: 'svcntt',
    database: 'test'
};

// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
export default  pool;

