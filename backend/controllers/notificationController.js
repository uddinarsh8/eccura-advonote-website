const sql = require("mssql");
const config = require("../config/db");

exports.getNotifications = async (req, res) => {

    try {

        const { advocateId } = req.params;

        const pool = await sql.connect(config);

        const result = await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .query(`
                SELECT *
                FROM Notifications
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
exports.getRecentNotifications = async (req, res) => {

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
                SELECT TOP 3 *
                FROM Notifications
                WHERE advocateId = @advocateId
                ORDER BY createdAt DESC
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

exports.markAsRead = async (req, res) => {

    try {

        const { id } = req.params;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .query(`
                UPDATE Notifications
                SET isRead = 1
                WHERE id = @id
            `);

        res.json({
            success: true,
            message: "Notification marked as read"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.deleteNotification = async (req, res) => {

    try {

        const { id } = req.params;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .query(`
                DELETE FROM Notifications
                WHERE id = @id
            `);

        res.json({
            success: true,
            message: "Notification deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};