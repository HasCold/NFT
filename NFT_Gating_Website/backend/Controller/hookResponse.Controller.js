import fetchNFTs from "../../Frontend/src/hooks/useFetchNFTs.js";
import { errorHandler } from "../middleware/errorHandler.Middleware.js";
import { io } from "../server.js";

export const hookResponse = async (req, res) => {
    try {
        const account = req.body[0].from;
        const numNFTs = await fetchNFTs(account);

        io.emit("nftsUpdated", {
            userNFTs: numNFTs.userNFTs
        })

        res.status(200).json({
            success: true,
            message: "Webhook Triggered"
        });

    } catch (error) {
        console.error(error);
        return errorHandler(res);
    }
}