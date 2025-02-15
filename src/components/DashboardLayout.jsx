import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title, children}) => {
    const {isOpen,onClose,onOpen}=useDisclosure();
  return (
    <Flex color="black">
    <Box display={{base: "none",lg:"flex",}}>
    <Sidenav />
    </Box>
<SideDrawer isOpen={isOpen} onClose={onClose}/>
    <Box flexGrow={1}>
    <Topnav title={title}  onOpen={onOpen} />
    <Container maxW="70rem" mt="6" >{children}</Container>
    </Box>
    </Flex>
       
  )
}

export default DashboardLayout