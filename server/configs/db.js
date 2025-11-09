import mongoose, { connect } from "mongoose";


const connectDB = async () =>{
    try{
        mongoose.connection.on("connected", ()=> console.log("Database Connected"))

        await mongoose.connect(`${process.env.MONGO_URI}/quickblog`);
        process.exit(1); // stop app if db fails
    }
    catch (error){
        console.log(error.message);
    }
}

export default connectDB;