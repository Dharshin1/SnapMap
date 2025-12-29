const express = require("express");

const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

const healthRoute = require("../SnapMap/backend/routes/src/health");
const authRoute = require ("../SnapMap/backend/routes/src/auth");

app.use("/api/v1",healthRoute);
app.use("/api/v1",authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));