"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from "@/theme/theme"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      {props.children}
    </ChakraProvider>
  )
}
