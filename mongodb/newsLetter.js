import mongoose, { Schema } from "mongoose";

const MODEL_NAME = "NewsLetter";

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
