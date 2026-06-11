const sql = require("mssql");
const config = require("../config/db");

exports.addTodo = async (req, res) => {

    try {

        const {
            advocateId,
            task
        } = req.body;

        const pool = await sql.connect(config);

        await pool.request()
            .input("advocateId", sql.Int, advocateId)
            .input("task", sql.VarChar, task)
            .query(`
                INSERT INTO ToDos
                (
                    advocateId,
                    task
                )
                VALUES
                (
                    @advocateId,
                    @task
                )
            `);

        res.json({
            success: true,
            message: "Task Added"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.getTodos = async (req, res) => {

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
                FROM ToDos
                WHERE advocateId=@advocateId
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
exports.getPendingTodoCount = async (req, res) => {

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
                SELECT COUNT(*) AS pendingTasks
                FROM ToDos
                WHERE advocateId = @advocateId
                AND completed = 0
            `);

        res.json({
            pendingTasks:
                result.recordset[0].pendingTasks
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.completeTodo = async (req, res) => {

    try {

        const { id } = req.params;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .query(`
                UPDATE ToDos
                SET completed=1
                WHERE id=@id
            `);

        res.json({
            success: true,
            message: "Task Completed"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.deleteTodo = async (req, res) => {

    try {

        const { id } = req.params;

        const pool = await sql.connect(config);

        await pool.request()
            .input("id", sql.Int, id)
            .query(`
                DELETE FROM ToDos
                WHERE id=@id
            `);

        res.json({
            success: true,
            message: "Task Deleted"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};