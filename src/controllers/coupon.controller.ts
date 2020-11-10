import { Request, Response } from "express";
import { products } from "../database/products";

export async function getCoupon(
   req: Request,
   res: Response
): Promise<Response> {
   return res.json(products);
}
export async function getCoupons(req: Request, res: Response): Promise<Response> {
   const product = products.filter((x) => x.id === parseInt(req.params.id));
   if (product.length > 0) {
      return res.json(product);
   } else {
      return res.json({
         ok: false,
         msg: "Producto no encontrado",
      });
   }
}
