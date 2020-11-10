"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = void 0;
const products_1 = require("../database/products");
async function getPhotos(req, res) {
    const photos = products_1.products;
    return res.json(photos);
}
exports.getPhotos = getPhotos;
