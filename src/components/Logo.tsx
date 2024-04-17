import { Box, Image } from "@chakra-ui/react"

const Logo = () => {
  return (
    <Box width={"fit-content"}>
        <Image src="/logo.png" width={"100%"} objectFit={"cover"} cursor={"pointer"} borderRadius={40} />
    </Box>
  )
}

export default Logo