import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect("mongodb+srv://subanu292004:subanu@mern-realestate.umnk6xx.mongodb.net/?retryWrites=true&w=majority&appName=mern-realEstate").then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});


const app=express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});


