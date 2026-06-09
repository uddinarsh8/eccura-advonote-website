const config = {
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT),

  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  database: process.env.DB_DATABASE,

  options: {
    trustServerCertificate: true,
    encrypt: false
  }
};

module.exports = config;