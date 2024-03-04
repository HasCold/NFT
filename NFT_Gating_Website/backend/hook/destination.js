// We create a webhook which is responsible for continuous monitoring of the status of deployed blockchain.

import axios from "axios";

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_e681f1ba6181480c84a26af62ef9f7ab'
};

const data = {
  name: 'My Destination',
  to_url: ' https://cfce-39-50-128-227.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));