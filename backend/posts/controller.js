
// import post_model from "./model";

export function get(req, res) {
    res.json({
        "message": "get post list"
    })
}

export function create(req, res) {
    res.json({
        "message": "create post",
        "body":req.body
    })
}

export function detail(req, res) {
    res.json({
        "message": "detail post",
        "id": req.params.id
    })
}

export function update(req, res) {
    res.json({
        "message": "update post",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    res.json({
        "message": "delete post",
        "id": req.params.id
    })
}