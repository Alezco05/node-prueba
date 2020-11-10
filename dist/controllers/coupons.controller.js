"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCoupon = exports.createCoupon = exports.getCoupon = exports.getCoupons = void 0;
const coupons_1 = require("../database/coupons");
const products_1 = require("../database/products");
async function getCoupons(req, res) {
    return res.json(coupons_1.coupons);
}
exports.getCoupons = getCoupons;
async function getCoupon(req, res) {
    const coupon = coupons_1.coupons.filter((x) => x.id === parseInt(req.params.id));
    if (coupon.length > 0) {
        return res.json(coupon);
    }
    else {
        return res.json({
            ok: false,
            msg: "Cupon no encontrado",
        });
    }
}
exports.getCoupon = getCoupon;
async function createCoupon(req, res) {
    const { name, description, product_id } = req.body;
    const product = products_1.products.filter((x) => x.id === parseInt(product_id));
    if (product.length > 0) {
        const newCoupon = {
            id: coupons_1.coupons.length,
            name,
            description,
            product_id,
            valid_since: new Date().toISOString(),
            valid_until: new Date(new Date().getTime() + 60 * 60 * 24 * 1000).toISOString(),
        };
        coupons_1.coupons.push(newCoupon);
        return res.json({
            ok: true,
            cupon: newCoupon,
        });
    }
    else {
        return res.json({
            ok: false,
            msg: "El ID del producto no existe",
        });
    }
}
exports.createCoupon = createCoupon;
async function validarCoupon(req, res) {
    const coupon = coupons_1.coupons.find((x) => x.id === parseInt(req.params.id));
    if (coupon) {
        const valid_until = Date.parse(coupon === null || coupon === void 0 ? void 0 : coupon.valid_until);
        const valid_since = Date.parse(coupon === null || coupon === void 0 ? void 0 : coupon.valid_since);
        const today = Date.parse(new Date().toISOString());
        if (today >= valid_since || today <= valid_until) {
            return res.json({
                ok: false,
                msg: "Cuponvalido",
            });
        }
        else {
            return res.json({
                ok: false,
                msg: "Cupon no valido",
            });
        }
    }
    else {
        return res.json({
            ok: false,
            msg: "Cupon no encontrado",
        });
    }
}
exports.validarCoupon = validarCoupon;
