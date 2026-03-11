import {
  Box,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  HStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface BaseInputProps extends ChakraInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = ({
  leftIcon,
  rightIcon,
  ...props
}: BaseInputProps) => {
  return (
    <Box width={props.width}>
      <HStack
        width="full"
        position="relative"
        border="1px solid"
        borderColor="brand.neutral.200"
        borderRadius="lg"
        bg="white"
        px={3.5}
        py={"8px"}
        minH="10"
        transition="all 0.2s ease"
        _hover={{
          borderColor: "brand.neutral.600",
        }}
        _focusWithin={{
          borderWidth: "1.5px",
          borderColor: "brand.neutral.700",
          boxShadow: "0 0 0 1px var(--colors-brand-primary-500)",
        }}
      >
        {leftIcon && (
          <Box
            color="brand.neutral.400"
            display="flex"
            alignItems="center"
            flexShrink={0}
          >
            {leftIcon}
          </Box>
        )}

        <ChakraInput
          flex={1}
          border="none"
          outline="none"
          bg="transparent"
          boxShadow="none"
          _focus={{ boxShadow: "none" }}
          _focusVisible={{ boxShadow: "none" }}
          _placeholder={{ color: "brand.text.disabled" }}
          px={"8px"}
          {...props}
        />

        {rightIcon && (
          <Box
            color="brand.neutral.400"
            display="flex"
            alignItems="center"
            flexShrink={0}
          >
            {rightIcon}
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default Input;
