import { asyncErrorHandler, errorHandler } from "../middleware/errorHandler.Middleware.js";
import { contract } from "../server.js";

export const fetchNFTs = asyncErrorHandler(async (req, res) => {  // Address 1 : 0x59f4E786Edb7580C0E13527Dafca9Cdc22301927
    try {
        const {addressFrom} = req.body;

        if(!addressFrom) return errorHandler(res, 404, "Contract Address Not Found");
        if(!contract) return errorHandler(res, 404, "Contract Instance Not Found");

        const balancePromise = await contract.balanceOf(addressFrom);
        const nftBalance = Number(balancePromise);

        if(nftBalance > 0){
            res.status(200).json({
                success: true,
                message: "User NFT's",
                userNFTs: nftBalance
            })
        }
        
        res.status(400).json({message: "User has no NFT"})
    } catch (error) {
        console.error("Error in fetching NFT :", error);
        return errorHandler(res, 500, error);
    }
})
