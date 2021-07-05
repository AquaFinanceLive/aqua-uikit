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
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};