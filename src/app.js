import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { __dirname } from "./libs/dirname.js";
import path from "path";
import multerRoutes from "./routes/multer.routes.js";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/", multerRoutes);

export { app };
