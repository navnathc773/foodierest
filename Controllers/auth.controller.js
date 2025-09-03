import { Router } from "express";
import { CategoryItems } from "../Models/auth.model.js";
import { readFileSync } from "fs";

const foodyData = JSON.parse(
  readFileSync(new URL("../Foodie.json", import.meta.url))
);

// Router for inserting data
const insertRouter = Router();

insertRouter.get("/", async (req, res) => {
  try {
    const insertData = await CategoryItems.insertMany(foodyData); // safer than create for bulk
    console.log("Data inserted into collection");
    res.status(201).json({ message: "Data inserted successfully", data: insertData });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
});

// Router for fetching data
const fetchRouter = Router();

fetchRouter.get("/", async (req, res) => {
  try {
    const data = await CategoryItems.find(req.query);
    res.status(200).json({ msg: data });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

export const authData = insertRouter;
export const authFetch = fetchRouter;
