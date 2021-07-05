import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.primary,
  hover: "#ffffff",
};

export const dark: NavTheme = {
  background: darkColors.primary,
  hover: "#052063",
};
