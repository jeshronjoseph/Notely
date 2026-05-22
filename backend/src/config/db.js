import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"notes_db"
        });
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
        
    }catch(error){
        console.log("Error connecting to MongoDB",error);
        process.exit(1);    
    }
}