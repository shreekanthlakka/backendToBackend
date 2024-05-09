import express from "express";
import { getUserDetails } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/search").get(getUserDetails);

export default router;
