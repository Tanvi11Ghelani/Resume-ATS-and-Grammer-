import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import textRoutes from "./src/routes/textRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/text", textRoutes);

export default app;
