import { db } from "../database";

let productSchema = new db.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  {
    collection: "products",
  }
);
let product_model = db.model("Product", productSchema);
export default product_model;
