import {useNavigate ,useLocation} from "react-router-dom";
import fetchNFTs from "../hooks/useFetchNFTs";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const revealMsg = async () => {
        try {
            const {address} = location.state;
            const res = await fetchNFTs(address);
            // const data = await res.json();
            if(res.status === 200){
                navigate("/members")
            }else{
                alert(`You currently do not hold any NFTs in collection w/ address 0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d`)
            }

        } catch (error) {
            console.error(error);
        }
  }

  return (
    <div>
         <span className="beautiful-sentence">I have a secret message for holders of my NFT collection with <br></br>address 0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d</span>
        <br></br>
        <br></br>
        <button onClick={revealMsg}>Reveal Message</button>
    </div>
  )
}

export default Home