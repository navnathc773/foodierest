import express from "express";
import { authData, authFetch } from "./Controllers/auth.controller.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mount routes
app.use("/", authData);
app.use("/getAll", authFetch);

// Health check route (helps Railway)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
