const sql = require("mssql");
const config = require("../config/db");

exports.getTodayCases = async (req, res) => {

    try {

        const advocateId = req.params.advocateId;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .query(`
                SELECT *
                FROM Cases
                WHERE advocateId=@advocateId
                AND hearingDate=CAST(GETDATE() AS DATE)
                ORDER BY hearingDate
            `);

        res.json(result.recordset);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.addCase = async (req, res) => {

    try {

        const {
            advocateId,
            courtName,
            caseNumber,
            caseYear,
            petitioner,
            respondent,
            sectionName,
            caseType,
            counselFor,
            hearingDate,
            priority,
            additionalInfo
        } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .input("courtName", sql.VarChar, courtName)
            .input("caseNumber", sql.VarChar, caseNumber)
            .input(
                "caseYear",
                sql.Int,
                caseYear ? parseInt(caseYear) : null
            )
            .input("petitioner", sql.VarChar, petitioner)
            .input("respondent", sql.VarChar, respondent)
            .input("sectionName", sql.VarChar, sectionName)
            .input("caseType", sql.VarChar, caseType)
            .input("counselFor", sql.VarChar, counselFor)
            .input("hearingDate", sql.Date, hearingDate)
            .input("priority", sql.VarChar, priority)
            .input(
                "additionalInfo",
                sql.VarChar,
                additionalInfo || ""
            )
            .query(`
                INSERT INTO Cases
                (
                    advocateId,
                    courtName,
                    caseNumber,
                    caseYear,
                    petitioner,
                    respondent,
                    sectionName,
                    caseType,
                    counselFor,
                    hearingDate,
                    priority,
                    additionalInfo
                )
                VALUES
                (
                    @advocateId,
                    @courtName,
                    @caseNumber,
                    @caseYear,
                    @petitioner,
                    @respondent,
                    @sectionName,
                    @caseType,
                    @counselFor,
                    @hearingDate,
                    @priority,
                    @additionalInfo
                )
            `);

        res.json({
            success: true,
            message: "Case Added Successfully"
        });

    } catch (error) {

        console.log("CASE ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.getCases = async (req, res) => {

    try {

        const advocateId = req.params.advocateId;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .query(`
                SELECT *
                FROM Cases
                WHERE advocateId = @advocateId
                ORDER BY createdAt DESC
            `);

        res.json(result.recordset);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.deleteCase = async (req, res) => {

    try {

        const id = req.params.id;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .query(`
                DELETE FROM Cases
                WHERE id=@id
            `);

        res.json({
            success: true,
            message: "Case Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.updateCase = async (req, res) => {

    try {

        const id = req.params.id;

        const {
            courtName,
            caseNumber,
            petitioner,
            respondent
        } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .input("courtName", sql.VarChar, courtName)
            .input("caseNumber", sql.VarChar, caseNumber)
            .input("petitioner", sql.VarChar, petitioner)
            .input("respondent", sql.VarChar, respondent)
            .query(`
                UPDATE Cases
                SET
                    courtName=@courtName,
                    caseNumber=@caseNumber,
                    petitioner=@petitioner,
                    respondent=@respondent
                WHERE id=@id
            `);

        res.json({
            success: true,
            message: "Case Updated Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.getCalendarCases = async (req, res) => {

    try {

        const advocateId = req.params.advocateId;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .query(`
                SELECT
                    id,
                    petitioner,
                    respondent,
                    hearingDate,
                    courtName,
                    caseNumber
                FROM Cases
                WHERE advocateId = @advocateId
                ORDER BY hearingDate
            `);

        res.json(result.recordset);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
exports.getCaseById = async (req, res) => {

    try {

        const id = req.params.id;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("id", sql.Int, id)
            .query(`
                SELECT *
                FROM Cases
                WHERE id = @id
            `);

        res.json(result.recordset[0]);

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};