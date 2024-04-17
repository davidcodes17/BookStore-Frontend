import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PiEqualizerThin } from "react-icons/pi";

const TableCompo = () => {
  return (
    <TableContainer>
      <Table
        colorScheme="teal"
        size={{ lg: "sm", md: "sm", sm: "sm", base: "sm" }}
      >
        <Thead>
          <Tr>
            <Th>ASSETS CLASS</Th>
            <Th>PORTIFOLIO%</Th>
            <Th>ASSET COST</Th>
            <Th>ASSET VALUE</Th>
            <Th>%RETURN</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems={"center"} gap={2}>
                <PiEqualizerThin size={30} />
                <Text>Equity</Text>
              </Flex>
            </Td>
            <Td>0.00%</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems={"center"} gap={2}>
                <PiEqualizerThin size={30} />
                <Text>Equity</Text>
              </Flex>
            </Td>
            <Td>0.00%</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems={"center"} gap={2}>
                <PiEqualizerThin size={30} />
                <Text>Equity</Text>
              </Flex>
            </Td>
            <Td>0.00%</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems={"center"} gap={2}>
                <PiEqualizerThin size={30} />
                <Text>Equity</Text>
              </Flex>
            </Td>
            <Td>0.00%</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
            <Td>0.00</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableCompo;
