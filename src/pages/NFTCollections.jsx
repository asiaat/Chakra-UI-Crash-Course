import { 
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useNFTs
  } from "@thirdweb-dev/react";

import { use, useState } from "react";
import { NavLink } from "react-router-dom";

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
          {collection?.map((nft) => (
 
            <div key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia 
              metadata={nft.metadata}
            />
              Square ID: {nft.metadata.id.toString()}
              <div>
          <NavLink
          to={COLLECTION_URL+"/"+nft.metadata.id.toString()}
          target="_blank"
          >
            Buy via OpenSea
          </NavLink>
        </div>
              </div>
          ) )}
        </div>

      </div>
    )
  }