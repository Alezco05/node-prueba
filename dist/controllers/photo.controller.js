"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = void 0;
const products_1 = require("../database/products");
async function getPhotos(req, res) {
    const photos = products_1.products;
    return res.json(photos);
}
exports.getPhotos = getPhotos;
/* export async function getPhoto(req: Request, res: Response): Promise<Response> {
   const photo = await Photo.findById(req.params.id);
   return res.json(photo);
}
export async function deletePhoto(req: Request, res: Response): Promise<Response> {
   const photo = await Photo.findByIdAndDelete(req.params.id);
   if(photo) {
    
   }
   return res.json(photo);
}
export  async function createPhoto(req: Request, res: Response): Promise<Response> {
   const {title, description} = req.body;
   const newPhoto = {
      title,
      description,
       };
   const photo = new Photo(newPhoto);
   await photo.save();
   return res.json({
      message: 'Photo saved',
      photo
   });
}
 export async function updatePhoto(req: Request, res: Response): Promise<Response> {
   const {id} = req.params;
   const {title, description} = req.body;
   const updatePhoto = await Photo.findByIdAndUpdate(id,{
      title,
      description
   }, {new:true});
   return res.json(updatePhoto);
}
 */ 
