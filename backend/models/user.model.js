import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        uid: { type: Number },
        username: { type: String },
        email: { type: String },
        address: {
            street: { type: String },
            city: { type: String },
            zipCode: { type: String },
        },
    },
    { timestamps }
);

const User = mongoose.model("User", userSchema);

export default User;
