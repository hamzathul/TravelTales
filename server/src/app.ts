import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

config();

const app = express();

app.use(express.json());

//remove it from production
app.use(morgan("dev"));

export default app