// config/config.js

require('dotenv').config();

module.exports = {
  // MongoDB connection URI
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://Monesh_22:Podapul22@monesh.8aatlyo.mongodb.net/?retryWrites=true&w=majority&appName=Monesh',

  // JWT secret key
  JWT_SECRET: process.env.JWT_SECRET || 'e6a7ee4d6992d5ec5533a704df5b52afa5815f1192526b85a47031ed6ec3a7fe',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '623476844782-jm0r4ubdg8kldjh08hv7tqfvi1hk6sus.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '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'
};
