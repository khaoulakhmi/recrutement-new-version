import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: "2xl",
      fontWeight: "bold",
      fontFamily: "heading",
    },
  },
  h2: {
    value: {
      fontSize: "xl",
      fontWeight: "bold",
      fontFamily: "heading",
    },
  },
  h3: {
    value: {
      fontSize: "lg",
      fontWeight: "semibold",
      fontFamily: "heading",
    },
  },
  h4: {
    value: {
      fontSize: "md",
      fontWeight: "semibold",
      fontFamily: "heading",
    },
  },
  body: {
    value: {
      fontSize: "md",
      fontWeight: "normal",
      fontFamily: "body",
    },
  },
  "body-sm": {
    value: {
      fontSize: "sm",
      fontWeight: "normal",
      fontFamily: "body",
    },
  },
  caption: {
    value: {
      fontSize: "xs",
      fontWeight: "normal",
      fontFamily: "body",
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
})
