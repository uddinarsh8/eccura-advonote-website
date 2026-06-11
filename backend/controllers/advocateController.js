const sql = require("mssql");
const config = require("../config/db");

exports.registerAdvocate = async (req, res) => {

    try {

        const {
            name,
            mobile,
            email,
            state,
            city
        } = req.body;

        const pool = await sql.connect(config);

        // Check if mobile already exists
        const existingAdvocate =
            await pool.request()
                .input(
                    "mobile",
                    sql.VarChar,
                    mobile
                )
                .query(`
                    SELECT id
                    FROM Advocates
                    WHERE mobile = @mobile
                `);

        if (
            existingAdvocate.recordset.length > 0
        ) {

            return res.status(400).json({

                success: false,
                message:
                    "This mobile number is already registered."

            });

        }

        await pool.request()
            .input("name", sql.VarChar, name)
            .input("mobile", sql.VarChar, mobile)
            .input("email", sql.VarChar, email)
            .input("state", sql.VarChar, state)
            .input("city", sql.VarChar, city)
            .query(`
                INSERT INTO Advocates
                (
                    name,
                    mobile,
                    email,
                    state,
                    city
                )
                VALUES
                (
                    @name,
                    @mobile,
                    @email,
                    @state,
                    @city
                )
            `);

        res.json({

            success: true,
            message:
                "Advocate Registered Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};
exports.sendOTP = async (req, res) => {

    try {

        const { mobile } = req.body;

        const pool = await sql.connect(config);

        // Check if advocate exists
        const advocate =
            await pool.request()
                .input(
                    "mobile",
                    sql.VarChar,
                    mobile
                )
                .query(`
                    SELECT id
                    FROM Advocates
                    WHERE mobile = @mobile
                `);

        if (
            advocate.recordset.length === 0
        ) {

            return res.status(404).json({

                success: false,
                message:
                    "Mobile number not registered. Please register first."

            });

        }

        // Generate OTP
        const otp =
            Math.floor(
                100000 + Math.random() * 900000
            ).toString();

        // Save OTP
        await pool.request()
            .input("mobile", sql.VarChar, mobile)
            .input("otp", sql.VarChar, otp)
            .query(`
                INSERT INTO OTPs
                (
                    mobile,
                    otp
                )
                VALUES
                (
                    @mobile,
                    @otp
                )
            `);

        console.log("OTP:", otp);

        res.json({

            success: true,
            message: "OTP Sent"

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};
const jwt = require("jsonwebtoken");

exports.verifyOTP = async (req, res) => {

    try {

        const { mobile, otp } = req.body;

        const pool = await sql.connect(config);

        // Verify OTP
        const otpResult =
            await pool.request()
                .input(
                    "mobile",
                    sql.VarChar,
                    mobile
                )
                .input(
                    "otp",
                    sql.VarChar,
                    otp
                )
                .query(`
                    SELECT *
                    FROM OTPs
                    WHERE mobile = @mobile
                    AND otp = @otp
                `);

        if (
            otpResult.recordset.length === 0
        ) {

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });

        }

        // Find advocate
        const advocateResult =
            await pool.request()
                .input(
                    "mobile",
                    sql.VarChar,
                    mobile
                )
                .query(`
                    SELECT *
                    FROM Advocates
                    WHERE mobile = @mobile
                `);

        const advocate =
            advocateResult.recordset[0];

        if (!advocate) {

            return res.status(404).json({
                success: false,
                message: "Advocate not found"
            });

        }

        // Delete used OTP
        await pool.request()
            .input(
                "mobile",
                sql.VarChar,
                mobile
            )
            .query(`
                DELETE FROM OTPs
                WHERE mobile = @mobile
            `);

        // Generate JWT
        const token =
            jwt.sign(
                {
                    id: advocate.id,
                    role: "advocate"
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "7d"
                }
            );

        res.json({

            success: true,

            token,

            advocate: {

                id: advocate.id,
                name: advocate.name,
                mobile: advocate.mobile,
                email: advocate.email

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};