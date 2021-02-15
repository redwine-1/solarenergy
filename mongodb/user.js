import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "User";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Model =
  mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, userSchema);

export default Model;
