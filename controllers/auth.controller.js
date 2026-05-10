import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
      // add a new user to the database
      const { name, email, password } = req.body;

      // check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          const error = new Error("User already exists");
          error.status = 400;
          throw error;
      }

      // hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // create a new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save({ session });

      const token = jwt.sign(
        { userID: newUser._id },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );
      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: {
          user: newUser,
          token,

        }
      });

  }catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { email, password } = req.body;

    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("Invalid email or password");
      error.status = 401;
      throw error;
    }

    // check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.status = 401;
      throw error;
    }

    const token = jwt.sign(
      { userID: user._id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      status: "success",
      message: "User signed in successfully",
      data: {
        user,
        token,
      }
    });
  }catch (error) {
      await session.abortTransaction();
      session.endSession();
      next(error);
    }
};

export const SignOut = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    //
  }catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};
