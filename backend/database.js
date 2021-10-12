import mongoose from "mongoose";

// XXX: change url if needed
let url = process.env.MONGO_URL || "mongodb://root:root@localhost:27017/mevn-practice?authSource=admin";

mongoose.connect(url).then(() => {
    console.log("Database connected");
}).catch((error) => {
    console.log("Database could't be connected to: " + error);
});

export { mongoose as db };