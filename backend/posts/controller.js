
// import post_model from "./model";

export function get(req, res) {
    // TODO: Use post_model.find
    res.json({
        "message": "get post list"
    })
}

export function create(req, res) {
    // TODO: Use post_model.create
    res.json({
        "message": "create post",
        "body":req.body
    })
}

export function detail(req, res) {
    // TODO: Use post_model.findById
    res.json({
        "message": "detail post",
        "id": req.params.id
    })
}

export function update(req, res) {
    // TODO: Use post_model.findByIdAndUpdate
    res.json({
        "message": "update post",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    // TODO: Use post_model.findByIdAndRemove
    res.json({
        "message": "delete post",
        "id": req.params.id
    })
}