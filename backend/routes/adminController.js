const sql = require("mssql");
const config = require("../config/db");

exports.getDashboard = async (req,res)=>{

 try{

  const pool =
  await sql.connect(config);

  const leads =
  await pool.request()
  .query(`
    SELECT COUNT(*) as total
    FROM Leads
  `);

  const contacts =
  await pool.request()
  .query(`
    SELECT COUNT(*) as total
    FROM ContactRequests
  `);

  const demos =
  await pool.request()
  .query(`
    SELECT COUNT(*) as total
    FROM DemoRequests
  `);

  res.json({

   totalLeads:
   leads.recordset[0].total,

   contactRequests:
   contacts.recordset[0].total,

   demoRequests:
   demos.recordset[0].total

  });

 }catch(error){

  console.log(error);

  res.status(500).json({
   message:error.message
  });

 }

};
exports.getLeads = async(req,res)=>{

 const pool =
 await sql.connect(config);

 const result =
 await pool.request()
 .query(`
   SELECT *
   FROM Leads
   ORDER BY createdAt DESC
 `);

 res.json(
   result.recordset
 );

};
exports.searchLeads = async(req,res)=>{

 const search =
 req.query.search;

 const pool =
 await sql.connect(config);

 const result =
 await pool.request()

 .input(
  "search",
  sql.VarChar,
  `%${search}%`
 )

 .query(`
   SELECT *
   FROM Leads

   WHERE
   name LIKE @search

   OR email LIKE @search

   OR phone LIKE @search
 `);

 res.json(
  result.recordset
 );

};