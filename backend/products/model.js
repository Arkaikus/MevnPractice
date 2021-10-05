import { db } from "../database";

let productSchema = new db.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    collection: "products",
  }
);
let product_model = db.model("Post", productSchema);
export default product_model;
