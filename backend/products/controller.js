
// import product_model from "./model";

export function get(req, res) {
    res.json({
        "message": "get product list"
    })
}

export function create(req, res) {
    res.json({
        "message": "create product",
        "body":req.body
    })
}

export function detail(req, res) {
    res.json({
        "message": "detail product",
        "id": req.params.id
    })
}

export function update(req, res) {
    res.json({
        "message": "update product",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    res.json({
        "message": "delete product",
        "id": req.params.id
    })
}