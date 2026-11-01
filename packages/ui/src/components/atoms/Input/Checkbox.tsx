import React from "react";
import { Checkbox as ChakraCheckbox, Box, VStack } from "@chakra-ui/react";
import Typography from "../Typography/Typography";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof ChakraCheckbox.Root> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

const Checkbox = ({ label, helperText, error, required, ...rest }: CheckboxProps) => {
  const hasError = !!error;

  return (
    <Box>
      <ChakraCheckbox.Root invalid={hasError} {...rest} gap={3}>
        <ChakraCheckbox.HiddenInput />

        <ChakraCheckbox.Control
          borderRadius="4px"
          borderWidth="2px"
          borderColor={hasError ? "brand.error.500" : "brand.accent.200"}
          bg={hasError ? "brand.error.50" : "brand.accent.50"}
          transition="all 0.2s ease"
          _hover={{
            boxShadow: hasError
              ? "0 0 0 1px var(--chakra-colors-brand-error-300)"
              : "0 0 0 1px var(--chakra-colors-brand-accent-300)",
          }}
          _focusVisible={{
            boxShadow: hasError
              ? "0 0 0 2px var(--chakra-colors-brand-error-500)"
              : "0 0 0 2px var(--chakra-colors-brand-primary-500)",
          }}
          _checked={{
            bg: hasError ? "brand.error.500" : "brand.accent.500",
            borderColor: hasError ? "brand.error.500" : "brand.accent.500",
            color: "white", // For check icon
          }}
          _disabled={{
            bg: "brand.neutral.100",
            borderColor: "brand.neutral.200",
            cursor: "not-allowed",
            opacity: 0.6,
          }}
        >
          {/* Add ChakraCheckbox.Indicator for the check icon */}
          <ChakraCheckbox.Indicator>
            {/* You might need to add an icon here */}
          </ChakraCheckbox.Indicator>
        </ChakraCheckbox.Control>

        {label && (
          <ChakraCheckbox.Label>
            <Typography variant="body" color="inherit">
              {label}
              {required && (
                <Typography as="span" color="brand.error.500">
                  {" "}
                  *
                </Typography>
              )}
            </Typography>
          </ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>

      {(helperText || error) && (
        <Box ml="6" mt="1">
          {" "}
          {/* Changed from mr to ml, adjusted spacing */}
          <Typography variant={hasError ? "error" : "caption"}>
            {hasError ? error : helperText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Checkbox;
