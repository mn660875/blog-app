const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Title is required"],
      },
     
      content: {
        type: String,
        required: [true, "Content is required"],
      },
    
      author: {
        type: String,
        default: "Admin",
      },
      category: {
        type: String,
        default: "General",
      },
      image: {
        type: String
      }
    },
    {
      timestamps: true,
    }
  );

  export const Post= mongoose.models.blogs || mongoose.model("blogs", postSchema);