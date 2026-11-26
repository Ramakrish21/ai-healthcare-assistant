
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("AI-Powered Healthcare Assistant API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);

const PORT = 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Backend startup failed:", error.message);
    }
};

startServer();
