
// import customer_model from "./model";

export function get(req, res) {
    res.json({
        "message": "get customer list"
    })
}

export function create(req, res) {
    res.json({
        "message": "create customer",
        "body":req.body
    })
}

export function detail(req, res) {
    res.json({
        "message": "detail customer",
        "id": req.params.id
    })
}

export function update(req, res) {
    res.json({
        "message": "update customer",
        "id": req.params.id,
        "data": req.body
    })
}

export function remove(req, res) {
    res.json({
        "message": "delete customer",
        "id": req.params.id
    })
}