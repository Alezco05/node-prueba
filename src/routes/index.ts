import { Router } from "express";
const router = Router();

import { createCoupon, getCoupons, getCoupon, validarCoupon } from "../controllers/coupons.controller";
import { getProducts, getProduct } from "../controllers/products.controller";
import { validarAuth } from "../middleware/validate-user";
import { validarCustomer } from "../middleware/validate-customer";
import { check } from "express-validator";
import { validarCampos } from "../middleware/validar-campo";

router.route("/products").get([validarAuth], getProducts);
router.route("/products/:id").get([validarAuth], getProduct);

router.route("/coupon")
      .get([validarAuth], getCoupons)
      .post(
            [
                  validarAuth,
                  check("name", "El nombre es obligatorio").not().isEmpty(),
                  check("description", "La descripcion es obligatorio").not().isEmpty(),
                  check("product_id", "El ID del producto es obligatorio").not().isEmpty(),
                  validarCampos,
            ],
            createCoupon
      );
      
      
router.route("/coupon/:id").get([validarAuth], getCoupon);
router.route("/coupon-validate/:id").get([validarCustomer], validarCoupon);


export default router;
