"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GoodBye_1 = require("../Controller/GoodBye");
const router = express_1.default.Router();
router.get("/", GoodBye_1.sayGoodBy);
exports.default = router;
//# sourceMappingURL=GoodBye.js.map