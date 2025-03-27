import { Drawer, Icon, Button, Portal, Heading, Text } from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import Link from "next/link";

export const MobileNavigation = () => {
  return (
    <Drawer.Root placement="start">
      <Drawer.Trigger display={{ base: "block", md: "none" }}>
        <Button asChild variant="ghost" w="fit" h="fit" size="sm">
          <Icon size="lg">
            <LuMenu />
          </Icon>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content as="nav">
            <Drawer.Header display="flex" justifyContent="space-between">
              <Heading fontFamily="heading" fontWeight="bold">Menu</Heading>
              <Drawer.CloseTrigger asChild>
                <Button variant="ghost" w="fit" h="fit">
                  <LuX />
                </Button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" gap="1rem">
              <Link href="/kids" passHref>
                <Text _hover={{ cursor: "pointer" }}>Niños</Text>
              </Link>
              <Link href="/women" passHref>
                <Text _hover={{ cursor: "pointer" }}>Mujeres</Text>
              </Link>
              <Link href="/men" passHref>
                <Text _hover={{ cursor: "pointer" }}>Hombres</Text>
              </Link>
              <Link href="/accessories" passHref>
                <Text _hover={{ cursor: "pointer" }}>Accesorios</Text>
              </Link>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}