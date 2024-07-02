import { Box, HStack, Stack,Text,Icon, Heading, Center } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";

const Sidenav = () => {

  const navLinks=[{
    icons: RiDashboardLine,
    text: "Dashboard",
    link: "/"
  },{
    icons:MdOutlineDoubleArrow,
    text:"Transactions",
    link: "/transactions", 

  }]
  return (
    
   <Stack justify="space-between" boxShadow="lg" maxW="16rem" h="100vh" >
   <Box>
   <Heading fontSize="20px" textAlign="center" pt="56px" as="h1">CryptoDash</Heading>
   <Box mt="6" mx="3">
   {navLinks.map((nav) => (
      <HStack  borderRadius="10px" key={nav.text} py="3" px="4" _hover={
        {
          bg:"#F3F3F7",
          color:"#171717",
        }
      }
      color="#797E82">
        <Icon  as={nav.icons}/>
        <Text fontSize="14px">{nav.text}</Text>
      </HStack>
     )

     )}
   </Box>
   </Box>
   <Box mt="6" mx="3" mb="6">
   <HStack  borderRadius="10px" py="3" px="4" _hover={
        {
          bg:"#F3F3F7",
          color:"#171717",
        }
      }
      color="#797E82">
        <Icon  as={MdContactSupport} />
        <Text fontSize="14px">Support</Text>
      </HStack>
      </Box>
   </Stack>
  )
}

export default Sidenav