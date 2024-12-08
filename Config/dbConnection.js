import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// to connect to mongodb
export const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('successfully connected to mongodb');
    } catch(error){
        console.log('Error connecting to mongodb', error);
    }
}