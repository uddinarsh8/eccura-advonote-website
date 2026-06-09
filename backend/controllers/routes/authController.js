const sql = require("mssql");
const bcrypt = require("bcryptjs");

const config =
require("../config/db");

exports.login = async (
 req,
 res
)=>{

 try{

  const {
   email,
   password
  } = req.body;

  const pool =
   await sql.connect(config);

  const result =
   await pool.request()

   .input(
    "email",
    sql.VarChar,
    email
   )

   .query(`
     SELECT *
     FROM Admins
     WHERE email=@email
   `);

  const admin =
   result.recordset[0];

  if(!admin){

    return res.status(404)
      .json({
        message:"Admin Not Found"
      });

  }

 }catch(error){

  res.status(500)
   .json(error);

 }

};