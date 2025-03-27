import { Heading, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { LuShoppingCart, LuUserRound } from "react-icons/lu";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

export const Navigation = () => {
  return (
    <Flex
      as="header"
      w="full"
      py="1rem"
      px={{ base: "1rem", md: "2rem" }}
      borderBottom="1px solid"
      borderColor="gray.200"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top="0"
    >
      <Flex as="nav" spaceX={{ base: ".8rem", md: "2rem" }} alignItems="center">
        <MobileNavigation />
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          fontFamily="heading"
          letterSpacing="-0.05em"
        >
          Origin Shop
        </Heading>
        <Flex
          spaceX="2rem"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/kids">
            <Text
              borderBottom="1px solid transparent"
              transition="border-color 0.2s"
              _hover={{ cursor: "pointer", borderColor: "gray.400" }}
            >
              Niños
            </Text>
          </Link>
          <Link href="/women">
            <Text
              borderBottom="1px solid transparent"
              transition="border-color 0.2s"
              _hover={{ cursor: "pointer", borderColor: "gray.400" }}
            >
              Mujeres
            </Text>
          </Link>
          <Link href="/men">
            <Text
              borderBottom="1px solid transparent"
              transition="border-color 0.2s"
              _hover={{ cursor: "pointer", borderColor: "gray.400" }}
            >
              Hombres
            </Text>
          </Link>
          <Link href="/accessories">
            <Text
              borderBottom="1px solid transparent"
              transition="border-color 0.2s"
              _hover={{ cursor: "pointer", borderColor: "gray.400" }}
            >
              Accesorios
            </Text>
          </Link>
        </Flex>
      </Flex>

      <Flex spaceX=".5rem">
        <Button variant="ghost">
          <Icon>
            <LuShoppingCart />
          </Icon>
        </Button>
        <Button variant="ghost">
          <Icon>
            <LuUserRound />
          </Icon>
        </Button>
      </Flex>
    </Flex>
  )
}
