import { Request, Response, NextFunction } from "express";

export const validarCustomer = (req:Request, res:Response, next:NextFunction) => {

    // Leer el Token
    const auth = req.header('Auth');
    if ( !auth ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay Usuario en la petición'
        });
    }
    if(auth === 'customer') next();
    else{
        return res.status(401).json({
            ok: false,
            msg: 'No tiene autorizacion para esta acción'
        });
    }
    
}
