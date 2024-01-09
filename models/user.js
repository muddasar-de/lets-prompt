import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists!"],
    required: [true, "email must be required!"],
  },
  username: {
    type: String,
    unique: [true, "username already exists!"],
    required: [true, "username must be required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const User = model.User || model("User", UserSchema);

export default User;
