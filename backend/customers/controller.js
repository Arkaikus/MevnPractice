
// import customer_model from "./model";

export function get(req, res) {
    // TODO: Use customer_model.find
    res.json({
        "message": "get customer list"
    })
}

export function create(req, res) {
    // TODO: Use customer_model.create
    res.json({
        "message": "create customer",
        "body":req.body
    })
}

export function detail(req, res) {
    // TODO: Use customer_model.findById
    res.json({
        "message": "detail customer",
        "id": req.params.id
    })
}

export function update(req, res) {
    // TODO: Use customer_model.findByIdAndUpdate
    res.json({
        "message": "update customer",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    // TODO: Use customer_model.findByIdAndRemove
    res.json({
        "message": "delete customer",
        "id": req.params.id
    })
}