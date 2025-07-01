import express from "express";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`listening on PORT${PORT}`)
});

