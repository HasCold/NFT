import { Router } from "express";
import { fetchNFTs } from "../controller/member.Controller.js";

const router = Router();

router.post("/fetchingNFTs", fetchNFTs);

export default router;