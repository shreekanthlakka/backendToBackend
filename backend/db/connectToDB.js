import mongoose from "mongoose";

const connectTodb = () => {
    mongoose
        .connect(process.env.DB_URI)
        .then((res) => {
            console.log("db connected");
        })
        .catch((err) => console.log("failed to connect", err));
};

export { connectTodb };
