import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react"
import { system } from "../theme"

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-sm"
  | "caption"
  | "overline"

interface TypographyProps extends ChakraTextProps {
  variant?: TypographyVariants
}

const Typography = ({ variant = "body", ...props }: TypographyProps) => {
  return <ChakraText textStyle={variant} {...props} />
}

export default Typography
