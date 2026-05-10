import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import process from 'process';
// import { isSpoofedBot } from "@arcjet/inspect";


const isProduction = process.env.NODE_ENV === 'production';
const botAllowList = [
  'CATEGORY:SEARCH_ENGINE',
  ...(isProduction ? [] : ['CATEGORY:TOOL']),
];


const aj = arcjet({

  key: process.env.ARCJET_KEY,
  rules: [

    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE",

      allow: botAllowList,
    }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
