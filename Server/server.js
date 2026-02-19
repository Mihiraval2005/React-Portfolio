import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: [
    'https://mihir-5nlg.onrender.com/',
    // 'https://portfolio-api-y0l7.onrender.com'
    // 'http://localhost:5173',
  ],
   methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
