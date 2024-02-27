import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Akarmi from "./routes/noteRoutes.js";


import cors from "cors";

dotenv.config();
const app = express();



// Middleware for parsing request body
app.use(express.json());

app.use("/notes", Akarmi);

// Middleware for handling CORS policy
// Option 1: Allow all origins (domains) with default of cors(*)
app.use(cors({origin: "*"}));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to MERN Stack Tutorial!");
});



mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });