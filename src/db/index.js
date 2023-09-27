import mongoose from "mongoose";
import models from "../models";

console.log('process.env.DATABASE_URL: ', process.env.DATABASE_URL);
export const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const preDefinedData = () => {
  addAdmin();
};

const addAdmin = async () => {
  const match = await models.User.findOne({ email: process.env.EMAIL });
  if (!match) {
    models.User.create({ email: process.env.EMAIL, password: process.env.PASSWORD, userType: "Admin", isVerified: true });
  }
};
