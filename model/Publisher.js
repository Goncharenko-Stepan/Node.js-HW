import mongoose from "mongoose";

const PublisherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Publisher = mongoose.model("Publisher", PublisherSchema);

export default Publisher;
