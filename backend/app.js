import cors from "cors";
import express from "express";
import { customer_routes } from "./customers/routes.js";
import { post_routes } from "./posts/routes.js";
import { product_routes } from "./products/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Setup routes
post_routes(app);
product_routes(app);
customer_routes(app);

// Listen to port 4000
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Connected to port " + port);
});