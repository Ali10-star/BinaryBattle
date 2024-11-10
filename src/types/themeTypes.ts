export type ThemeColor =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "lime"
  | "mint"
  | "sky";

export type ThemeAppearance = "light" | "dark";

export type ThemeGrayColor = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand';

export type ThemeRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export type ThemeScaling = '90%' | '95%' | '100%' | '105%' | '110%';

export interface ThemeType {
  appearance: ThemeAppearance;
  accentColor: ThemeColor;
  grayColor: ThemeGrayColor;
  panelBackground: 'solid' | 'translucent';
  radius: ThemeRadius;
  scaling: ThemeScaling;
}