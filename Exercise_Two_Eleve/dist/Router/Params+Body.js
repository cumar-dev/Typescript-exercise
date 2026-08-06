"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Params_Body_1 = require("../Controller/Params+Body");
const router = express_1.default.Router();
router.put("/:id", Params_Body_1.productBodyAndParams);
exports.default = router;
//# sourceMappingURL=Params+Body.js.map