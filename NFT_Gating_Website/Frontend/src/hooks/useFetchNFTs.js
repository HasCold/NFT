
const fetchNFTs = async (address) => {

    try {
        const res = await fetch(`http://localhost:5000/api/members/fetchingNFTs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({addressFrom: address})  
        });        
        
        return res;
  } catch (error) {
    console.error("Error fetching NFTs:", error); 
}}

export default fetchNFTs;