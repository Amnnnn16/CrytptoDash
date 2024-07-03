import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";
const Topnav = ({title,onOpen}) => {
  return (
    <Box boxShadow="xl"  px="4">
    <HStack maxW="70rem" justify="space-between" mx="auto"  h="16">
    <Icon as={FaBars} onClick={onOpen} display={{
      base:"block", lg:"none "
    }}></Icon>
      
        <Heading fontWeight="medium"  fontSize="28px" >{title}</Heading>
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
