import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);


