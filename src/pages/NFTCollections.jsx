import { 
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useNFTs
  } from "@thirdweb-dev/react";

import { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridItem, Button } from '@chakra-ui/react'


export default function NFTCollections() {
    const contractAddress = "0xb939B2da835c48761Ce36Ef5beA6CAC2cC72F669";
    const { contract } = useContract(contractAddress);
    
    
    const address = useAddress();
    const {data: collection} = useNFTs(contract);
    const OPENSEA_URL = "https://testnets.opensea.io/assets/goerli/"
    const COLLECTION_URL = OPENSEA_URL + contractAddress;

    return (
      <div>NFT Collections

    <div>

    <h2>Metadata : {collection?.metadata}</h2>
        <Grid templateColumns='repeat(4, 1fr)' gap={2}>
          {collection?.map((nft) => (
 
 
            <div key={nft.metadata.id.toString()}>
            <GridItem w='100%' h='100%' bg='gray.100' p='5'>    
              <ThirdwebNftMedia 
              metadata={nft.metadata}
            />
              Square ID: {nft.metadata.id.toString()}
              <div>
                <Button
                color="gray.600"
                background="gray.300"
                >
                <NavLink
                    
                    to={COLLECTION_URL+"/"+nft.metadata.id.toString()}
                    target="_blank"
                    >
                        Buy @OpenSea
                    </NavLink>
                </Button>
          
        </div>
        </GridItem>
              </div>
              
          ) )}
         </Grid>
        </div>
      </div>
     
    )
   
  }