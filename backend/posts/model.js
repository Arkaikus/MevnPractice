import { db } from "../database";

let postSchema = new db.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    collection: "posts",
  }
);
let post_model = db.model("Post", postSchema);
export default post_model;
