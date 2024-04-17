import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";

const Login = () => {
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState("d");
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        mt={{ lg: 150, md: 150, sm: 100, base: 100 }}
      >
        <Box>
          <Heading
            px={{ lg: 0, md: 0, sm: 10, base: 5 }}
            fontSize={40}
            fontWeight={600}
          >
            Login Page
          </Heading>
          <Text px={{ lg: 0, md: 0, sm: 10, base: 5 }}>
            Myrtle Application Suite
          </Text>
          <Box
            width={{ lg: 500, md: 400, sm: "100vw", base: "100vw" }}
            px={{ lg: 0, md: 0, sm: 10, base: 5 }}
            mt={6}
          >
            <FormControl isRequired>
              <FormLabel fontSize={12}>Username/Email</FormLabel>
              <Input
                placeholder="you@gmail.com"
                // _focus={{ boxShadow: "none" }}
                boxShadow={"none"}
                outline={"none"}
                borderRadius={10}
                fontSize={12}
                type="email"
              />
            </FormControl>
            <FormControl isRequired pt={5}>
              <FormLabel fontSize={12}>Password</FormLabel>
              <Flex
                border={"1px solid #eee"}
                _focus={{ boxShadow: "0px 0px 1px #C3D8EE" }}
                borderRadius={10}
              >
                <Input
                  placeholder="***********************"
                  outline={"none"}
                  boxShadow={"none"}
                  _focus={{ boxShadow: "none" }}
                  border={"none"}
                  fontSize={12}
                  type={type}
                />
                {display ? (
                  <IconButton
                    onClick={() => {
                      setDisplay(false);
                      setType("text");
                    }}
                    _hover={{ bg: "none" }}
                    aria-label="EyeSlash"
                    bg={"none"}
                    icon={<EyeSlash size={15} />}
                  />
                ) : (
                  <IconButton
                    onClick={() => {
                      setDisplay(true);
                      setType("password");
                    }}
                    _hover={{ bg: "none" }}
                    aria-label="Eye"
                    bg={"none"}
                    icon={<Eye size={15} />}
                  />
                )}
              </Flex>
            </FormControl>
            <Button
              mt={5}
              width={"100%"}
              bg={"#06C75E"}
              _hover={{ bg: "#06C75E" }}
              fontWeight={400}
              py={6}
              borderRadius={10}
              // color={"#fff"}
              onClick={() => {
                setLoading(!loading);
              }}
            >
              {loading ? <Spinner /> : "Login"}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
