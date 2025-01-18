import mongoose from 'mongoose';
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sowmyasrinivas239:Sowmyasri%40123@cluster0.xid8l.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}