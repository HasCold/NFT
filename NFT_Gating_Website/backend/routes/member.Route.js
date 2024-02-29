import { Router } from "express";
import { fetchNFTs } from "../Controller/member.Controller.js";

const router = Router();

router.post("/fetchingNFTs", fetchNFTs);

export default router;