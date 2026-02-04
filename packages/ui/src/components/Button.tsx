import { 
    ButtonProps as ChakraButtonProps,
    Button as ChakraButton
} from "@chakra-ui/react";
import { ReactNode } from "react";

export type ButtonVariant = "primary"| "secondary" | "accent" | "solid" | "outline" | "ghost" | "link";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ChakraButtonProps, "variant">  {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    children: ReactNode;
} 

const Button = ({
    variant = "primary",
    size = "md",
    rightIcon,
    leftIcon,
    children,
    ...props
}: ButtonProps) => {
    
    const buttonStyles = {
        primary: {
            bg: "brand.primary.500",
            color: "white",
            _hover: {
            bg: "brand.primary.700",
            },
            _active: {
            bg: "brand.primary.700",
            },
            _disabled: {
            bg: "brand.primary.100",
            color: "white",
            cursor: "not-allowed",
            opacity: 0.6,
            },
        },

        secondary: {
            bg: "brand.secondary.500",
            color: "white",
            _hover: {
            bg: "brand.secondary.700",
            },
            _active: {
            bg: "brand.secondary.700",
            },
            _disabled: {
            bg: "brand.secondary.100",
            color: "white",
            cursor: "not-allowed",
            opacity: 0.6,
            },
        },

        accent: {
            bg: "brand.accent.500",
            color: "white",
            _hover: {
            bg: "brand.accent.700",
            },
            _active: {
            bg: "brand.accent.700",
            },
            _disabled: {
            bg: "brand.accent.100",
            color: "white",
            opacity: 0.6,
            },
        },

        solid: {
            bg: "brand.neutral.800",
            color: "white",
            _hover: {
            bg: "brand.neutral.900",
            },
            _active: {
            bg: "brand.neutral.900",
            },
        },

        outline: {
            bg: "transparent",
            color: "brand.primary.500",
            border: "1px solid",
            borderColor: "brand.primary.500",
            _hover: {
            bg: "brand.primary.50",
            },
            _active: {
            bg: "brand.primary.100",
            },
            _disabled: {
            color: "brand.neutral.400",
            borderColor: "brand.neutral.300",
            },
        },

        ghost: {
            bg: "transparent",
            color: "brand.text.primary",
            _hover: {
            bg: "brand.neutral.100",
            },
            _active: {
            bg: "brand.neutral.200",
            },
            _disabled: {
            color: "brand.neutral.400",
            },
        },

        link: {
            bg: "transparent",
            color: "brand.primary.500",
            padding: 0,
            height: "auto",
            _hover: {
            textDecoration: "underline",
            color: "brand.primary.700",
            },
            _active: {
            color: "brand.primary.700",
            },
            _disabled: {
            color: "brand.neutral.400",
            },
        },
        } as const

        console.log("buttonStyles", buttonStyles[variant]);


    return (
        <ChakraButton
            {...buttonStyles[variant]}
            size={size}
            {...props}
            // borderRadius={"xl"}
        >
            {children}
        </ChakraButton>
    )
}


export default Button