import express from "express";
import { sayGoodBy } from "../Controller/GoodBye";
const router = express.Router();
router.get("/", sayGoodBy);
export default router;