import {Router} from 'express';
const router = Router();

import { getProducts, getProduct} from '../controllers/products.controller'

router.route('/products')
      .get(getProducts)
router.route('/products/:id')
      .get(getProduct);

export default router;