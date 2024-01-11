require("dotenv").config();

const config = {
  app: "employee-management-system",
  appPort: process.env.APP_PORT || 8000,
  database: {
    uri: process.env.DATABASE_URI,
    db: process.env.DATABASE_NAME,
  },
  admin: {
    password: process.env.PASSWORD,
  },
  jwt: {
    secret: process.env.JSON_WEB_TOKEN_SECRET,
  },
};

module.exports = config;
