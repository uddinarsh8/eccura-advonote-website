const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config/db");

exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const pool = await sql.connect(config);

    const result = await pool.request()
      .input("email", sql.VarChar, email)
      .query(`
       SELECT *
       FROM Admins
       WHERE email=@email
     `);

    const admin = result.recordset[0];

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin Not Found"
      });
    }

    const match = await bcrypt.compare(
      password,
      admin.password
    );

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        role: admin.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email
      }
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};