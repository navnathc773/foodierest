import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { authData, authFetch } from "./Controllers/auth.controller.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Mount routes
app.use("/", authData);
app.use("/getAll", authFetch);

// Health check route (for Railway)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is listening on PORT ${PORT}`);
});
