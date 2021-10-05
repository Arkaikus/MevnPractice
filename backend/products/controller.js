
// import product_model from "./model";

export function get(req, res) {
    // TODO: Use product_model.find
    res.json({
        "message": "get product list"
    })
}

export function create(req, res) {
    // TODO: Use product_model.create
    res.json({
        "message": "create product",
        "body":req.body
    })
}

export function detail(req, res) {
    // TODO: Use product_model.findById
    res.json({
        "message": "detail product",
        "id": req.params.id
    })
}

export function update(req, res) {
    // TODO: Use product_model.findByIdAndUpdate
    res.json({
        "message": "update product",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    // TODO: Use product_model.findByIdAndRemove
    res.json({
        "message": "delete product",
        "id": req.params.id
    })
}