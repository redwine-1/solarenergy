import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "Message";

const messageSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: false },
  phoneNumber: { type: String },
  address: { type: String },
  message: { type: String, required: true },
  isHandled: { type: Boolean, required: true, default: false },
  date: { type: Date, default: Date.now },
});

const Model =
  mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, messageSchema);

export default Model;
