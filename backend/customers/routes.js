import {
    get as get_customers,
    create as create_customer,
    detail as detail_customer,
    update as update_customer,
    remove as remove_customer,
} from "./controller.js";

export function customer_routes(app) {
    // Posts Endpoints
    app.get("/customers", get_customers);
    app.post("/customers", create_customer);
    app.get("/customers/:id", detail_customer);
    app.put("/customers/:id", update_customer);
    app.delete("/customers/:id", remove_customer);
}