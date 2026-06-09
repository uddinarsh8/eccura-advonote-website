const sql = require("mssql");
const config = require("../config/db");

exports.createDemo = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      company,
      message
    } = req.body;

    const pool = await sql.connect(config);

    // Save Demo Request
    await pool.request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .input("phone", sql.VarChar, phone)
      .input("company", sql.VarChar, company)
      .input("message", sql.NVarChar, message)

      .query(`
        INSERT INTO DemoRequests
        (
          name,
          email,
          phone,
          company,
          message,
          status
        )
        VALUES
        (
          @name,
          @email,
          @phone,
          @company,
          @message,
          'New'
        )
      `);

    // Save Lead
    await pool.request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .input("phone", sql.VarChar, phone)

      .query(`
        INSERT INTO Leads
        (
          name,
          email,
          phone,
          source,
          status
        )
        VALUES
        (
          @name,
          @email,
          @phone,
          'Demo',
          'New'
        )
      `);

    res.status(201).json({
      success: true,
      message: "Demo Request Saved Successfully"
    });

  } catch(error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};