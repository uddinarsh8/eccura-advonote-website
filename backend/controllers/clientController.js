const sql = require("mssql");
const config = require("../config/db");

exports.addClient = async (req, res) => {

    try {

        const {
            advocateId,
            name,
            mobile,
            email,
            address
        } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .input("name", sql.VarChar, name)
            .input("mobile", sql.VarChar, mobile)
            .input("email", sql.VarChar, email)
            .input("address", sql.VarChar, address)
            .query(`
                INSERT INTO Clients
                (
                    advocateId,
                    name,
                    mobile,
                    email,
                    address
                )
                VALUES
                (
                    @advocateId,
                    @name,
                    @mobile,
                    @email,
                    @address
                )
            `);

        res.json({
            success: true,
            message: "Client Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.getClients = async (req, res) => {

    try {

        const { advocateId } = req.params;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input(
                "advocateId",
                sql.Int,
                advocateId
            )
            .query(`
                SELECT *
                FROM Clients
                WHERE advocateId = @advocateId
            `);

        res.json(
            result.recordset
        );

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.getClientCount = async (req, res) => {

    try {

        const { advocateId } = req.params;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input(
                "advocateId",
                sql.Int,
                advocateId
            )
            .query(`
                SELECT COUNT(*) AS totalClients
                FROM Clients
                WHERE advocateId = @advocateId
            `);

        res.json({
            totalClients:
                result.recordset[0].totalClients
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};