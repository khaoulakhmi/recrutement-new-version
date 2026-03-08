import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/700.css';
import '@fontsource/tajawal/400.css';
import '@fontsource/tajawal/700.css';
import { textStyles } from "./Typography.styles";


const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: {
            50:  { value: "#FFD6DA" }, // very light red (lighter than #F20530)
            100: { value: "#FFA1A9" },
            300: { value: "#F24858" },
            500: { value: "#F20530" }, // your original red
            700: { value: "#A5011E" }, // darker red
          },
          secondary: {
            50:  { value: "#E8F6F5" }, // very light teal
            100: { value: "#A7D5D1" },
            300: { value: "#4AA88E" },
            500: { value: "#2B8C27" }, // medium green (your color)
            700: { value: "#1F631A" }, // darker green
          },
          accent: {
            50:  { value: "#E6F6E8" }, // pale green
            100: { value: "#B9E3B6" },
            300: { value: "#81CB7D" },
            500: { value: "#257322" }, // dark green (your color)
            700: { value: "#1B4E18" }, // darker accent green
          },
          neutral: {
            50: { value: "#F7FAFC" },   // very light gray (default bg)
            100: { value: "#EDF2F7" },
            200: { value: "#E2E8F0" },
            300: { value: "#CBD5E0" },
            400: { value: "#A0AEC0" },   // mid gray
            500: { value: "#718096" },
            600: { value: "#4A5568" },
            700: { value: "#2D3748" },
            800: { value: "#1A202C" },
            900: { value: "#171923" },
          },
          text: {
            primary: { value: "#171923" },   // dark text
            secondary: { value: "#4A5568" }, // muted text
            disabled: { value: "#A0AEC0" },  // disabled / placeholder text
          },
          warning: {
            50: { value: "#FFF8E1" },
            500: { value: "#D69E2E" },  // Chakra's default yellow.500
            700: { value: "#B7791F" },
          },
          error: {
            50: { value: "#FFF5F5" },
            500: { value: "#E53E3E" },  // Chakra's default red.500
            700: { value: "#C53030" },
          },
          success: {
            50: { value: "#CFF2C9" },  // your pale green (#CFF2C9)
            500: { value: "#2B8C27" }, // your medium green (#2B8C27)
            700: { value: "#1F5E18" }, // darker success green
          },
        },
      },
      fonts: {
        heading: { value: "'Cairo', 'Tajawal', sans-serif" },
        body: { value: "'Tajawal', 'Cairo', sans-serif" },
        mono: { value: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" }
      },
      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        bold: { value: "700" },
      },
      radii: {
        none: { value: "0" },
        sm: { value: "0.125rem" },
        md: { value: "0.375rem" },
        lg: { value: "0.5rem" },
        xl: { value: "0.75rem" },
        "2xl": { value: "1rem" },
        "3xl": { value: "1.5rem" },
        full: { value: "9999px" },
      },
      shadows: {
        sm: { value: "0 1px 2px rgba(0, 0, 0, 0.05)" },
        md: { value: "0 4px 6px rgba(0, 0, 0, 0.1)" },
        lg: { value: "0 10px 15px rgba(0, 0, 0, 0.15)" },
        xl: { value: "0 20px 25px rgba(0, 0, 0, 0.2)" },
        "2xl": { value: "0 25px 50px rgba(0, 0, 0, 0.25)" },
        inner: { value: "inset 0 2px 4px rgba(0, 0, 0, 0.06)" },
        none: { value: "none" },
      },
    },
    textStyles: textStyles
  },
})

export const system = createSystem(defaultConfig, config)