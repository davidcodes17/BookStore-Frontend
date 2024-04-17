import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import TableCompo from "../components/TableCompo";

const DashboardLayout = () => {
  const date = new Date();
  return (
    <Box p={10} mt={{lg : 0, md : 0, sm : 100, base : "100px"}} ml={{lg : 100, md : 100, sm : 0, base : 0}}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box>
          <Heading>Welcome, Areegbe</Heading>
          <Text>Your last login {date.toDateString()}</Text>
        </Box>
        <Flex
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          alignItems={"flex-end"}
        >
          <FormControl mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
            <FormLabel>Portifolio</FormLabel>
            <Input width={{lg : "200px", md : "200px", sm : "100%", base : "100%"}} fontSize={12} />
          </FormControl>
          <FormControl mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
            <FormLabel>Start Date</FormLabel>
            <Input type="date" fontSize={12}  width={{lg : "200px", md : "200px", sm : "100%", base : "100%"}} />
          </FormControl>
          <FormControl mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
            <FormLabel>End Date</FormLabel>
            <Input type="date" fontSize={12}  width={{lg : "200px", md : "200px", sm : "100%", base : "100%"}} />
          </FormControl>
          <Button
            mt={{ lg: 0, md: 0, sm: 5, base: 5 }}
            bg={"#06C75E"}
            color={"#fff"}
            _hover={{ bg: "#06C75E" }}
            width={{ lg: "300px", md: "300px", sm: "100%", base : "100%" }}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
      <Box></Box>
      <Box mt={10}>
        <TableCompo />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
