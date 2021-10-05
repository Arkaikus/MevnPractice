
import product_model from "./model.js";

export function get(req, res) {
    // find => then => return as json
    product_model.find()
        .then(docs => res.json(docs))
        .catch(error => res.status(400).json(error));
}

export function create(req, res) {
    // save data => then => return doc
    product_model
        .create(req.body)
        .then(doc => res.json(doc))
        .catch(error => res.status(400).json(error));
}

export function detail(req, res) {
    // find by id => then => return doc
    product_model
        .findById(req.params.id)
        .then(doc => res.json(doc))
        .catch(error => res.status(400).json(error));
}

export function update(req, res) {
    // find by id => save data => then => return doc
    product_model.findByIdAndUpdate(req.params.id, req.body)
        .then(doc => res.json(doc))
        .catch(error => res.status(400).json(error));
}

export function remove(req, res) {
    // find by id => delete => then return empty
    product_model
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(error => res.status(400).json(error));
}