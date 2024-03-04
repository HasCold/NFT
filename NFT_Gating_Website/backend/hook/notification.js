//75ba19df-f16a-478b-b34a-d01055698868
import axios from "axios";

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_e681f1ba6181480c84a26af62ef9f7ab'
};

const data = {
  name: 'NFT Transfer',
  expression: 'Ly8gKHR4X2xvZ3NfdG9waWMxID1+ICdhNDMwNDFDOEUxNUNFOTNBMjE1NTIyREMxRjEyNDk2NGY4Yjc1MTA5JykgJiYgDQovLyAodHhfbG9nc19hZGRyZXNzID09ICcweDVmOTg1YWU1NDA1NjIxZDZkOUZFNkJBRkE0NGFjMGRlQ0M5RkYwOGQnKSAmJiANCi8vICh0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['f18c1183-0d9c-403a-98ec-4cce382ad725']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));


//   a43041C8E15CE93A215522DC1F124964f8b75109  -  The address which doesn't hold any NFT  
//   0x5f985ae5405621d6d9FE6BAFA44ac0deCC9FF08d  -  Contract Address