import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"
import { 
  ConnectWallet
} from "@thirdweb-dev/react";
import { NavLink } from "react-router-dom"


export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        
        <NavLink to="/">
         
          dynamic n. f. t.   .. 
        </NavLink>
        </Heading>
      <Spacer />

      <HStack spacing="20px"> 
        
        <NavLink to="collected">
         
          My NFTs
        </NavLink>
        <NavLink to="nfts">
         
          NFT Collections
        </NavLink>
        <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
        
      </HStack>
    </Flex>
  )
}
