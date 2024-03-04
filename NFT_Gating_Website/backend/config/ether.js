import {ethers} from "ethers";
import ABI from "../ABI.json" assert {type: 'json'};
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;

const provider = new ethers.JsonRpcProvider(API_KEY);   // Alchemy node as a service 
const contractAddress = "0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d";  // Deployed Contract Address on Sepolia Testnet

// Creating the Instance of our Contract
export const contract = new ethers.Contract(contractAddress, ABI, provider);