import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true, 'User Name is required'],
    trim : true,
    minL : 2,
    maxL : 50,
  },
  email : {
    type : String,
    required : [true, 'User Email is required'],
    unique : true,
    trim : true,
    lowercase : true,
    match : [/\S+@\S+\.\S+/, 'please fill a valid email address'],
    minL : 5,
    maxL : 255,
  },
  password : {
    type : String,
    required : [true, 'User Password is required'],
    minLength : 6,
  }
}, {Timestamp : true});

const User = mongoose.model('User', userSchema);

export default User;
