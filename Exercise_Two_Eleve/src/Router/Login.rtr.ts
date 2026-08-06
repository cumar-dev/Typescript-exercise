import express from "express";
import { loggedIn } from "../Controller/Login.ctr";
const router = express.Router();
router.post("/", loggedIn);
export default router;