const express = require("express");
const dotenv = require("dotenv");
const apiRouter = require("./routes/apiRoutes.js");

dotenv.config();

const { PORT } = require("./config/serverConfig.js");

const app = express();

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api",apiRouter);



app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
