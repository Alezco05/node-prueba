"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getProducts = void 0;
const products_1 = require("../database/products");
async function getProducts(req, res) {
    return res.json(products_1.products);
}
exports.getProducts = getProducts;
async function getProduct(req, res) {
    const product = products_1.products.filter((x) => x.id === parseInt(req.params.id));
    if (product.length > 0) {
        return res.json(product);
    }
    else {
        return res.json({
            ok: false,
            msg: "Producto no encontrado",
        });
    }
}
exports.getProduct = getProduct;
