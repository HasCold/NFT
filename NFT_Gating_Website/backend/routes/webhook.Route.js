import { Router } from "express";
import { hookResponse } from "../controller/hookResponse.Controller.js";

const router = Router();

router.post("/", hookResponse);

export default router;