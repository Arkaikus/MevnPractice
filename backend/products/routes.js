import {
    get as get_products,
    create as create_product,
    detail as detail_product,
    update as update_product,
    remove as remove_product,
} from "./controller.js";

export function product_routes(app) {
    // Products Endpoints
    app.get("/products", get_products);
    app.post("/products", create_product);
    app.get("/products/:id", detail_product);
    app.put("/products/:id", update_product);
    app.delete("/products/:id", remove_product);
}