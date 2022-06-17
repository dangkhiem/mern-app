import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  address: String,
  password: String,
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

export default User;
