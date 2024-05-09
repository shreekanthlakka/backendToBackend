import express from "express";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(morgan("tiny"));

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export default app;
