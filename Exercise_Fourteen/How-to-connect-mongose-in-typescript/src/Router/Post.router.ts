import express from "express";
import { deleteOnePost, handleCreatePost, handleGetAll, handleGetOnePost, updateOnePost } from "../Controller/Post.controller";
const router = express.Router();
router.get("/All", handleGetAll);
router.get("/one/:id", handleGetOnePost);
router.post("/create", handleCreatePost);
router.put("/update/:id", updateOnePost);
router.delete("/delete/:id", deleteOnePost);
export default router;