import dotenv from "dotenv";
import express from "express";
import {ethers} from "ethers";
import ABI from "./ABI.json" assert {type: 'json'};
import memberRoute from "./routes/member.Route.js"

dotenv.config();

const API_KEY = process.env.API_KEY;

const app = express();  // app instance by invoking the express() function. This instance is the foundation of your web-application.
app.use(express.json());   // Server to accept the json data from frontend 

const provider = new ethers.JsonRpcProvider(API_KEY);   // Alchemy node as a service 
const contractAddress = "0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d";  // Deployed Contract Address on Sepolia Testnet

// Creating the Instance of our Contract
export const contract = new ethers.Contract(contractAddress, ABI, provider);

app.use("/api/members", memberRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server Successfully Run On Port", PORT);
});
