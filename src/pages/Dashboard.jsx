import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  GridItem
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { use, useState } from "react";
import { 
  ConnectWallet,
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
  useOwnedNFTs,
  useContractWrite,
  useNFTs
} from "@thirdweb-dev/react";

export default function Dashboard() {
  const contractAddress = "0xb939B2da835c48761Ce36Ef5beA6CAC2cC72F669";
  const { contract } = useContract(contractAddress);
  const [param2, setParam2] = useState(5000);
  const address = useAddress();

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
     <GridItem>
      Hei your address: {address}
     </GridItem>
     <GridItem>
      Hei your address: {address}
     </GridItem>
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}
