import mongoose from "mongoose";

const ArticleShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const Article = mongoose.model("Article", ArticleShema);

export default Article;
