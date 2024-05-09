import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectTodb } from "./db/connectToDB.js";

connectTodb();

app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
);
