"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const products_controller_1 = require("../controllers/products.controller");
router.route('/products')
    .get(products_controller_1.getPhotos);
router.route('/products/:id');
exports.default = router;
