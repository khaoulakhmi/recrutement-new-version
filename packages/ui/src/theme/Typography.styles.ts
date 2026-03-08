import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: "2xl",
      fontWeight: "bold",
      fontFamily: "heading",
      color: "brand.text.primary"
    },
  },
  h2: {
    value: {
      fontSize: "xl",
      fontWeight: "bold",
      fontFamily: "heading",
      color: "brand.text.primary"
    },
  },
  h3: {
    value: {
      fontSize: "lg",
      fontWeight: "bold",
      fontFamily: "heading",
      color: "brand.text.primary"
    },
  },
  h4: {
    value: {
      fontSize: "md",
      fontWeight: "medium",
      fontFamily: "heading",
      color: "brand.text.primary"
    },
  },
  body: {
    value: {
      fontSize: "md",
      fontWeight: "normal",
      fontFamily: "body",
      color: "brand.text.secondary"
    },
  },
  "body-sm": {
    value: {
      fontSize: "sm",
      fontWeight: "normal",
      fontFamily: "body",
      color: "brand.text.secondary"
  },
},
  caption: {
    value: {
      fontSize: "xs",
      fontWeight: "normal",
      fontFamily: "body",
      color: "brand.text.disabled"
    },
  },
  overline: {
    value: {
      fontSize: "2xs",
      fontWeight: "normal",
      fontFamily: "body",
      textTransform: "uppercase",
    },
  },
  error: {
    value: {
      fontSize: "2xs",
      fontWeight: "normal",
      fontFamily: "body",
      color: "brand.error.500",
    },
  },
  success: {
    value: {
      fontSize: "2xs",
      fontWeight: "normal",
      fontFamily: "mono",
      color: "brand.success.500",
    },
  },
})
