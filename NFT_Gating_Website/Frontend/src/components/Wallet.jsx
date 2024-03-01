// import {ethers} from "ethers";
import {useNavigate} from "react-router-dom"

const Wallet = () => {
    const navigate = useNavigate();

  const connectWallet = async () => {
        try {
            if(window.ethereum){  // window.ethereum is an object that is injected into the browser by the MetaMask browser extension when it is installed and enabled.
                const accounts = await window.ethereum.request({method: "eth_requestAccounts"});  // fetch accounts from metamask
                // console.log(accounts[0]);
                
                navigate("/home", {state: {address: accounts[0]}});
            }else{
                alert("Install Metamask");
            }

        }catch (error) {
         console.error(error);   
        }
  }

  return (
    <button onClick={connectWallet}>Connect Wallet</button>
  )
}

export default Wallet