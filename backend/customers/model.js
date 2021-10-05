import { db } from "../database.js";

// Example
// {
//   "name":"example",
//   "email":"example@email.com",
//   "address":"example",
//   "city":"example",
//   "state":"example",
//   "postal_code":"example"
// }

let customerSchema = new db.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    postal_code: {
      type: String,
    },
  },
  {
    collection: "customers",
  }
);
let customer_model = db.model("Customer", customerSchema);
export default customer_model;
