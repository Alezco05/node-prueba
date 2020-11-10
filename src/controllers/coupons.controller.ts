import { Request, Response } from "express";
import { coupons } from "../database/coupons";
import { products } from "../database/products";
export async function getCoupons(
  req: Request,
  res: Response
): Promise<Response> {
  return res.json(coupons);
}

export async function getCoupon(
  req: Request,
  res: Response
): Promise<Response> {
  const coupon = coupons.filter((x) => x.id === parseInt(req.params.id));
  if (coupon.length > 0) {
    return res.json(coupon);
  } else {
    return res.json({
      ok: false,
      msg: "Cupon no encontrado",
    });
  }
}
export async function createCoupon(
  req: Request,
  res: Response
): Promise<Response> {
  const { name, description, product_id } = req.body;
  const product = products.filter((x) => x.id === parseInt(product_id));
  if (product.length > 0) {
    const newCoupon = {
      id: coupons.length,
      name,
      description,
      product_id,
      valid_since: new Date().toISOString(),
      valid_until: new Date(
        new Date().getTime() + 60 * 60 * 24 * 1000
      ).toISOString(),
    };
    coupons.push(newCoupon);
    return res.json({
      ok: true,
      cupon: newCoupon,
    });
  } else {
    return res.json({
      ok: false,
      msg: "El ID del producto no existe",
    });
  }
}

export async function validarCoupon(
  req: Request,
  res: Response
): Promise<Response> {
  const coupon = coupons.find((x) => x.id === parseInt(req.params.id));
  if (coupon) {
    const valid_until = Date.parse(coupon?.valid_until);
    const valid_since = Date.parse(coupon?.valid_since);
    const today = Date.parse(new Date().toISOString());
    if (today >= valid_since || today <= valid_until) {
      return res.json({
        ok: false,
        msg: "Cuponvalido",
      });
    } else {
      return res.json({
        ok: false,
        msg: "Cupon no valido",
      });
    }
  } else {
    return res.json({
      ok: false,
      msg: "Cupon no encontrado",
    });
  }
}
