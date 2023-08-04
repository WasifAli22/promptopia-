import mongoose from "mongoose";
let isConnected = false

export const connectToDB = async () => {

    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("Mongo DB is already connect");
        return;
    }
    try {
        await mongoose
            .connect(process.env.MONGO_URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        isConnected = true
        console.log("[MongoDB] Connected successfully.");
    }
    catch (error) {
        console.log(error);
    }
}