import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import bcrypt from "bcryptjs";

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    photo: String,
    email: {
      type: String,
      trim: true,
      lowercase: true,
      index: { unique: true, sparse: true },
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: String,
    gender: { type: String, enum: ["male", "female"] },
    phone: String,
    totalOrder: Number,
    address: [
      {
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        pincode: String,
      },
    ],
    userType: { type: String, default: "customer" },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.plugin(mongoosePaginate);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);
