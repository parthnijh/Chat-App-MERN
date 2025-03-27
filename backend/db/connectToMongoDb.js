import mongoose from "mongoose";
const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongo db")
    } catch (error) {
        cconsole.log('error connecting to mongo db')
    }
}

export default connectToMongoDb;