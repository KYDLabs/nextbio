import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const outline = defineStyle({
  border: "1px solid", // change the appearance of the border
  rounded: "lg",
  color: "black",
  borderColor: "black",
  background: "transparent",
  fontWeight: "medium", // change the font weight
});

export const linkTheme = defineStyleConfig({
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline },
});

export const theme = extendTheme({
  colors,
  components: {
    Button: buttonTheme,
    Link: linkTheme,
  },
});
