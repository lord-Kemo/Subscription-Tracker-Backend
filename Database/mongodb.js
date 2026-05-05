import mongoose from "mongoose";
import { MONGO_DB_URI, NODE_ENV} from '../config/env.js';
import process from 'process';
if(!MONGO_DB_URI){
  throw new Error('please define the MONGO_DB_URI env var isnide  .env.<development/production>.local');
}

const connectToDataBase = async () => {
  try{
    await mongoose.connect(MONGO_DB_URI);
    console.log(`connected to db in ${NODE_ENV} mode`);
  }catch (error){
    console.log('Error connecting to database:', error);
    process.exit(1);
  }
}

export default connectToDataBase;
