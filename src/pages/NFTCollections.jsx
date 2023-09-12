import { 
    ThirdwebNftMedia,
    Web3Button,
    useAddress,
    useContract,
    useContractMetadata,
    useContractWrite,
    useNFTs
  } from "@thirdweb-dev/react";

import { use, useState } from "react";

export default function NFTCollections() {
    const contractAddress = "0xb939B2da835c48761Ce36Ef5beA6CAC2cC72F669";
    const { contract } = useContract(contractAddress);
    
    
    const address = useAddress();
    const {data: collection} = useNFTs(contract);

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
          <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract?.erc721.claim(1)}
          >
            Mint Black Squere
          </Web3Button>
        </div>
              </div>
          ) )}
        </div>

      </div>
    )
  }