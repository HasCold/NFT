import { useEffect, useState } from "react";
import welcomeImg from "../images/GM.png";
import io from "socket.io-client";
import {useNavigate} from "react-router-dom"

const Member = () => {

  const [socket, setSocket] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const socketInstance = io("http://localhost:5000");
    setSocket(socketInstance);
    console.log(socket);

    return () => {  // This is the cleanup function when the components unmounts or user reconnect so it will go through 
      socketInstance.disconnect();
      setSocket(undefined);
    }
  }, []);

  useEffect(() => {
    if(socket){
      socket.on("nftsUpdated", (data) => {
        if(data.userNFTs < 1) {
          navigate("/"); 
          alert("You've been logged out because you no longer hold any NFTs in collection with address 0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d")
        } 
      });
    }
  }, [socket, navigate]);

  return (
    <div>
      <p>Thank you for being a holder of my NFT collection, here your message:</p>
      <img src={welcomeImg}></img>
    </div>
  )
}

export default Member