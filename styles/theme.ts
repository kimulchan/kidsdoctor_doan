type ColorType = "green" | "pink" | "yellow";

type MakePalette<T extends ColorType, N extends number[]> = `${T}${N[number]}`;

export type ThemeKeyType =
  | "white"
  | "main"
  | "black"
  | "gray"
  | MakePalette<"green", [50, 100, 300, 500, 700, 900]>
  | MakePalette<"pink", [50, 100, 300, 500, 700, 900]>
  | MakePalette<"yellow", [50, 100, 300, 500, 700, 900]>;

type ThemeType = Record<ThemeKeyType, `#${string}`>;

export const theme: ThemeType = {
  black: "#000000",
  gray: "#707070",
  white: "#FFFFFF",
  main: "#CF000D",
  green50: "#91E545",
  green100: "#85DC38",
  green300: "#7CC938",
  green500: "#6EB92B",
  green700: "#5FAA1C",
  green900: "#54941A",
  pink50: "#FD90C3",
  pink100: "#F977B4",
  pink300: "#F263A6",
  pink500: "#EA5098",
  pink700: "#DD3483",
  pink900: "#C72872",
  yellow50: "#FFC15A",
  yellow100: "#FFB438",
  yellow300: "#FFA510",
  yellow500: "#F39801",
  yellow700: "#E79000",
  yellow900: "#DA8800",
} as const;
