import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { system } from "./theme";

type Props = {
  children: ReactNode;
};

export function UIProvider({ children }: Props) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
