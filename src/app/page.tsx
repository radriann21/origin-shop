import { Box } from "@chakra-ui/react";
import { Navigation } from "@/components/app/Navigation";

export default function Home() {
  return (
    <Box
      as="main"
      maxW="full"
      minH="100vh"
      fontFamily="body"
    >
      <Navigation />
    </Box>
  )
}
