import {
  RadioGroup as ChakraRadio,
  RadioGroupRootProps,
  Stack,
} from "@chakra-ui/react";
import Typography from "../Typography/Typography";


type RadioVariant = "solid" | "outline" | "subtle" | "error";

interface RadioProps extends Omit<RadioGroupRootProps, "variant"> {
  items: { label: string; value: string }[];
  variant?: RadioVariant;
  error?: boolean;
}

const Radio = ({
  items,
  variant = "solid",
  error = false,  
  ...props
}: RadioProps) => {
  
  const getVariantStyles = (
    variant: RadioVariant
  ) => {
    switch (variant) {
      case "solid":
        return {
          _focus: {
            boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.6)",
          },
          _checked: {
            bg: "brand.accent.500",
            borderColor: "brand.accent.500",
            color: "white",
          },
        };

      case "outline":
        return {
          borderColor: "brand.accent.500",

          _focus: {
            boxShadow: "0 0 0 2px rgba(185, 227, 182, 0.6)",
          },
          _checked: {
            bg: "transparent",
            borderColor: "brand.accent.500",
            color: "brand.accent.500",
            
            },
        };

      case "subtle":
        return {
          bg: "brand.accent.100",
          _focus: {
            boxShadow: "0 0 0 2px rgb(185, 227, 182)",
          },
          _checked: {
            bg: "brand.accent.100",
            borderColor: "brand.accent.100",
          },
        };
      case "error":
        return {
          bg: "brand.error.100",
          _focus: {
            boxShadow: "0 0 0 2px rgba(248, 112, 107, 0.6)",
          },
          _checked: {
            bg: "red.500",
            borderColor: "red.500",
            color: "white",
            borderWidth: 2,
          },
        };
      default:
        return {};
    }
  };

  const variantStyles = error ? getVariantStyles("error") : getVariantStyles(variant);

  return (
    <ChakraRadio.Root {...props}>
      <Stack direction="row">
        {items?.map((item) => (
          <ChakraRadio.Item
            key={item.value}
            value={item.value}  
          >
            <ChakraRadio.ItemHiddenInput size={10} />
            <ChakraRadio.ItemIndicator {...variantStyles} />            
            <ChakraRadio.ItemText>
              <Typography variant="body" color={error ? "brand.error.500" : "brand.text.secondary"}>
                {item.label}
              </Typography>
            </ChakraRadio.ItemText>
          </ChakraRadio.Item>
        ))}
      </Stack>
    </ChakraRadio.Root>
  );
};

export default Radio;