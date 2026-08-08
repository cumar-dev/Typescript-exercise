"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Post_controller_1 = require("../Controller/Post.controller");
const router = express_1.default.Router();
router.get("/All", Post_controller_1.handleGetAll);
router.get("/one/:id", Post_controller_1.handleGetOnePost);
router.post("/create", Post_controller_1.handleCreatePost);
router.put("/update/:id", Post_controller_1.updateOnePost);
router.delete("/delete/:id", Post_controller_1.deleteOnePost);
exports.default = router;
//# sourceMappingURL=Post.router.js.map