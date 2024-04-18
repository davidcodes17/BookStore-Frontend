import { Flex, Input, Spinner } from "@chakra-ui/react";
import { SearchNormal } from "iconsax-react";
import { useState } from "react";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Flex
      my={5}
      alignItems={"center"}
      border={"2px solid #003263"}
      borderRadius={10}
      py={1}
      px={5}
    >
      <Input
        placeholder="Search ...."
        width={"100%"}
        onChange={(e) => {
          e.target.value.length > 0 ? setLoading(true) : setLoading(false);
        }}
        border={0}
        _focus={{ boxShadow: "none" }}
      />
      {!loading ? <SearchNormal size={30} color="#003263" /> : <Spinner />}
    </Flex>
  );
};

export default SearchBar;
