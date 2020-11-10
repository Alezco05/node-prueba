import { Router } from "express";
const router = Router();

import { getCoupons } from "../controllers/coupon.controller";
import { getProducts, getProduct } from "../controllers/products.controller";
import { validarAuth } from "../middleware/validate-user";

router.route("/products").get([validarAuth], getProducts);
router.route("/products/:id").get(getProduct);

router.route("/coupon").get(getCoupons);

export default router;
