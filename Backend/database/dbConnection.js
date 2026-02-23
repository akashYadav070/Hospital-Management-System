import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "hospitalDB"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Some error occured while connecting to Database:", err);
    });
};
