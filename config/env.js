import { config } from 'dotenv';
import process from 'process';

config({path :`.env.${process.env.NODE_ENV || 'development'}.local`});

export const {
  PORT,
  NODE_ENV,
  MONGO_DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_KEY,
  ARCJET_ENV
} = process.env;
