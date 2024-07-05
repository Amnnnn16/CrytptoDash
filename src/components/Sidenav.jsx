import {
  Box,
  HStack,
  Stack,
  Text,
  Icon,
  Heading,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname == link;
  };

  const navLinks = [
    {
      icons: RiDashboardLine,
      text: "Dashboard",
      link: "/",
    },
    {
      icons: MdOutlineDoubleArrow,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      justify="space-between"
      bg="white"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading fontSize="20px" textAlign="center" pt="56px" as="h1">
          CryptoDash
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                bg={isActive(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActive("/support") ? "#171717" : "#797E82"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                
              >
                <Icon as={nav.icons} />
                <Text fontSize="14px">{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActive("/support") ? "#F3F3F7" : "transparent"}
            color={isActive("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={MdContactSupport} />
            <Text fontSize="14px" mb="5px">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
