import React from "react";
import { tableData } from "../tableData";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  Stack,
  Text,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  return (
    <TableContainer maxH="100vh">
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Date&Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr>
              <Td>{data.id}</Td>
              <Td>
                <Stack>
                  <Text fontSize="14px">{data.date}</Text>
                  <Text fontSize="14px">{data.time}</Text>
                </Stack>
                {data.date}
              </Td>
              <Td fontSize="14px">
                {data.type.name} <Tag>{data.type?.tag}</Tag>
              </Td>
              <Td fontSize="14px">{data.amount}</Td>
              <Td
                fontSize="14px"
              ><Tag   bg={statusColor[data.status]}
                color="white"
                borderRadius="full">{data.status}</Tag>
                
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
