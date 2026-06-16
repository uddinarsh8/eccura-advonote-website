const sql = require("mssql");
const config = require("../config/db");

exports.getDashboard = async (req, res) => {

  try {

    const pool = await sql.connect(config);

    const totalLeadsResult =
      await pool.request()
        .query("SELECT COUNT(*) AS total FROM Leads");

    const contactResult =
      await pool.request()
        .query("SELECT COUNT(*) AS total FROM ContactRequests");

    const demoResult =
      await pool.request()
        .query("SELECT COUNT(*) AS total FROM DemoRequests");

    const recentLeadsResult =
      await pool.request()
        .query(`
        SELECT TOP 5 *
        FROM Leads
        ORDER BY id DESC
      `);

    res.json({

      totalLeads:
        totalLeadsResult.recordset[0].total,

      contactRequests:
        contactResult.recordset[0].total,

      demoRequests:
        demoResult.recordset[0].total,

      recentLeads:
        recentLeadsResult.recordset

    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.getLeads = async (req, res) => {

  try {

    const pool =
      await sql.connect(config);

    const result =
      await pool.request()
        .query(`
      SELECT *
      FROM Leads
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

exports.searchLeads = async (req, res) => {

  try {

    const search = req.query.search;

    const pool =
      await sql.connect(config);

    const result =
      await pool.request()
        .input("search", sql.VarChar, `%${search}%`)
        .query(`
        SELECT *
        FROM Leads
        WHERE
          name LIKE @search
          OR email LIKE @search
          OR phone LIKE @search
      `);

    res.json(result.recordset);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
exports.updateLeadStatus = async (req, res) => {

  try {

    const id = req.params.id;
    const { status } = req.body;

    const pool =
      await sql.connect(config);

    await pool.request()
      .input("id", sql.Int, id)
      .input("status", sql.VarChar, status)
      .query(`
    UPDATE Leads
    SET status = @status
    WHERE id = @id
  `);

    res.json({
      success: true,
      message: "Lead Updated"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
exports.getAnalytics = async (req, res) => {

    try {

        const pool = await sql.connect(config);

        /* Dashboard Counts */

        const totalLeadsResult =
            await pool.request()
                .query(`
                    SELECT COUNT(*) AS total
                    FROM Leads
                `);

        const contactResult =
            await pool.request()
                .query(`
                    SELECT COUNT(*) AS total
                    FROM ContactRequests
                `);

        const demoResult =
            await pool.request()
                .query(`
                    SELECT COUNT(*) AS total
                    FROM DemoRequests
                `);

        /* Source Distribution */

        const sourceResult =
            await pool.request()
                .query(`
                    SELECT
                        source,
                        COUNT(*) AS count
                    FROM Leads
                    GROUP BY source
                `);

        /* Status Distribution */

        const statusResult =
            await pool.request()
                .query(`
                    SELECT
                        status,
                        COUNT(*) AS count
                    FROM Leads
                    GROUP BY status
                `);

        /* Growth Rate */

        const currentMonthResult =
            await pool.request()
                .query(`
                    SELECT COUNT(*) AS total
                    FROM Leads
                    WHERE
                        MONTH(createdAt) = MONTH(GETDATE())
                        AND YEAR(createdAt) = YEAR(GETDATE())
                `);

        const previousMonthResult =
            await pool.request()
                .query(`
                    SELECT COUNT(*) AS total
                    FROM Leads
                    WHERE
                        MONTH(createdAt)
                            = MONTH(DATEADD(MONTH,-1,GETDATE()))
                        AND YEAR(createdAt)
                            = YEAR(DATEADD(MONTH,-1,GETDATE()))
                `);

        const currentMonth =
            currentMonthResult.recordset[0].total;

        const previousMonth =
            previousMonthResult.recordset[0].total;

        let growthRate = 0;

        if (previousMonth === 0) {

            growthRate =
                currentMonth > 0 ? 100 : 0;

        } else {

            growthRate = Math.round(

                (
                    (
                        currentMonth -
                        previousMonth
                    )
                    /
                    previousMonth
                ) * 100

            );

        }

        res.json({

            totalLeads:
                totalLeadsResult.recordset[0].total,

            contactRequests:
                contactResult.recordset[0].total,

            demoRequests:
                demoResult.recordset[0].total,

            growthRate,

            sourceData:
                sourceResult.recordset,

            statusData:
                statusResult.recordset

        });

    } catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};