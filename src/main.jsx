import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "goerli";
const tw_client_id = "6ab056290af6a463d282eb21db8f48a9";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider
      clientId={tw_client_id}
      activeChain={activeChain}
  >
    <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </ThirdwebProvider>
  
)
