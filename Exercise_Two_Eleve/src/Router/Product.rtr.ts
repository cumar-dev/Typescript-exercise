import express from "express";
import { Product } from "../Controller/Product.ctr";
const router = express.Router();
router.get("/", Product);
export default router;