import { Box, Button, Container, Flex, HStack, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
const Topnav = () => {
  return (
    <Box boxShadow="xl">
    <HStack maxW="80rem" justify="space-between" px="32" mx="auto"  h="16">
      
        <Heading fontWeight="medium"  fontSize="28px" >Dashboard</Heading>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
           
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            
          </MenuList>
        </Menu>
     
    </HStack>
    </Box>
  );
};

export default Topnav;
