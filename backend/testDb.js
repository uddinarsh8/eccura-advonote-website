const sql = require("mssql");
const config = require("./config/db");

async function testConnection() {
  try {
    await sql.connect(config);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

testConnection();