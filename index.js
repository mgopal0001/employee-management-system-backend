const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const connectDB = require("./persistence/connectDB");
const employeeRoute = require("./routes/employee");
const adminRoute = require("./routes/auth");
const app = express();

morgan(":method :url :status :res[content-length] - :response-time ms");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/employee", employeeRoute);
app.use("/admin", adminRoute);

app.get("/", (__, res) => {
  return res.status(200).json({
    app: config.app,
    version: "1.0.0",
  });
});

app.use("*", (__, res) => {
  return res.status(500).json({
    status: 500,
    message: "Internal server error",
    data: null,
  });
});

const startApp = () => {
  app.listen(config.appPort, async () => {
    await connectDB(config.database.uri, config.database.db);
    console.log(
      `Server is connected with database and running on the port: ${config.appPort}`
    );
  });
};

startApp();
