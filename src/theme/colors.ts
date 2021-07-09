import { Colors } from "./types";

export const baseColors = {
  failure: "#f5000f",
  primary: "#00A7F5",
  primaryBright: "#00A7F5",
  primaryDark: "#00A7F5",
  secondary: "#FFC81D",
  success: "#FFC81D",
  warning: "#FFC81D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundDisabled: "#eaf8ff",
  contrast: "#00A7F5",
  invertedContrast: "#FFFFFF",
  input: "#e8e8e8",
  tertiary: "#C2ECFF",
  text: "#000",
  textDisabled: "#BDBDBD",
  textSubtle: "#00A7F5",
  borderColor: "#C2ECFF",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff7e6 0%, #C2ECFF 100%)",
    background: "linear-gradient(180deg, #009DF5 0%, rgba(0, 157, 245, 0) 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#01164B",
  background: "#052063",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#052D72",
  primaryDark: "#01164B",
  tertiary: "#052D72",
  text: "#FFFFFF",
  textDisabled: "#c3c9da",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#01164B",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    background: "linear-gradient(180deg, #001549 0%, #013B81 100%);",
  },
};
