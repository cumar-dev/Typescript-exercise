"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Login_ctr_1 = require("../Controller/Login.ctr");
const router = express_1.default.Router();
router.post("/", Login_ctr_1.loggedIn);
exports.default = router;
//# sourceMappingURL=Login.rtr.js.map