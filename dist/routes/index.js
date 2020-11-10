"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const coupons_controller_1 = require("../controllers/coupons.controller");
const products_controller_1 = require("../controllers/products.controller");
const validate_user_1 = require("../middleware/validate-user");
const validate_customer_1 = require("../middleware/validate-customer");
const express_validator_1 = require("express-validator");
const validar_campo_1 = require("../middleware/validar-campo");
router.route("/products").get([validate_user_1.validarAuth], products_controller_1.getProducts);
router.route("/products/:id").get([validate_user_1.validarAuth], products_controller_1.getProduct);
router.route("/coupon")
    .get([validate_user_1.validarAuth], coupons_controller_1.getCoupons)
    .post([
    validate_user_1.validarAuth,
    express_validator_1.check("name", "El nombre es obligatorio").not().isEmpty(),
    express_validator_1.check("description", "La descripcion es obligatorio").not().isEmpty(),
    express_validator_1.check("product_id", "El ID del producto es obligatorio").not().isEmpty(),
    validar_campo_1.validarCampos,
], coupons_controller_1.createCoupon);
router.route("/coupon/:id").get([validate_user_1.validarAuth], coupons_controller_1.getCoupon);
router.route("/coupon-validate/:id").get([validate_customer_1.validarCustomer], coupons_controller_1.validarCoupon);
exports.default = router;
