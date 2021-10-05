import { db } from "../database";

let customerSchema = new db.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    }
  },
  {
    collection: "customers",
  }
);
let customer_model = db.model("Post", customerSchema);
export default customer_model;
