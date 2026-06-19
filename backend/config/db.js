module.exports = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: "localhost",
    database: process.env.DB_DATABASE,
    port: 61834,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};