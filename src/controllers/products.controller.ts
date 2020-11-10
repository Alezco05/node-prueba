import {Request,Response} from 'express';
import {products} from '../database/products'

export async function getPhotos(req: Request, res: Response): Promise<Response> {
   const photos = products;
   return res.json(photos);
}