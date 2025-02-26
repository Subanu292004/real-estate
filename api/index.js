import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect("mongodb+srv://subanu292004:subanu@mern-realestate.umnk6xx.mongodb.net/?retryWrites=true&w=majority&appName=mern-realEstate").then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});


const app=express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message=err.message||'Internal server message';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})