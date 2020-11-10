"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
exports.validarCampos = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            ok: false,
            errores: errors.mapped()
        });
    next();
};
