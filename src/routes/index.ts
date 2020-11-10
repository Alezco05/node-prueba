import {Router} from 'express';
const router = Router();

import { getPhotos} from '../controllers/products.controller'

router.route('/products')
      .get(getPhotos)
router.route('/products/:id')

export default router;