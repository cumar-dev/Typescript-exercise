import express from "express";
import { productBodyAndParams } from "../Controller/Params+Body";
const router = express.Router();
router.put("/:id", productBodyAndParams);
export default router;