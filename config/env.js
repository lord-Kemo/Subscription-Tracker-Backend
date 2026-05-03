import { config } from 'dotenv';
import process from 'process';

config({path :`.env.${process.env.NODE_ENV || 'development'}.local`});

export const { PORT, PORT_ENV } = process.env;
