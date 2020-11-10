"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAuth = void 0;
exports.validarAuth = (req, res, next) => {
    // Leer el Token
    const auth = req.header('Auth');
    if (!auth) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay Usuario en la petición'
        });
    }
    if (auth === 'admin')
        next();
    else {
        return res.status(401).json({
            ok: false,
            msg: 'No tiene autorizacion para esta acción'
        });
    }
};
