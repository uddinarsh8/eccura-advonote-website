const sql = require("mssql");
const config = require("../config/db");

exports.createContact = async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body;

    const pool = await sql.connect(config);

    await pool.request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .input("phone", sql.VarChar, phone)
      .input("message", sql.NVarChar, message)

      .query(`
        INSERT INTO ContactRequests
        (
          name,
          email,
          phone,
          message,
          status
        )
        VALUES
        (
          @name,
          @email,
          @phone,
          @message,
          'New'
        )
      `);

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
          'Contact',
          'New'
        )
      `);

    res.status(201).json({
      success: true,
      message: "Contact Request Saved Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};