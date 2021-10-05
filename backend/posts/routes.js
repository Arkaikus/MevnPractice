import {
    get as get_posts,
    create as create_post,
    detail as detail_post,
    update as update_post,
    remove as remove_post,
} from "./controller.js";

export function post_routes(app) {
    // Posts Endpoints
    app.get("/posts", get_posts);
    app.post("/posts", create_post);
    app.get("/posts/:id", detail_post);
    app.put("/posts/:id", update_post);
    app.delete("/posts/:id", remove_post);
}