const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// 👇 ADD THIS HERE
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

app.use("/api", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});